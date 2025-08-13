diff between Fact Dependency and Rules Chaining are
If you're checking other facts → it's Fact Dependency.
If you're checking other rule outcomes (via events) → it's Rule Chaining.

---------------------------------------------------------------------------------
engine.addFact('totalPrice', async (params, almanac) => {
  const base = await almanac.factValue('basePrice');
  const tax = await almanac.factValue('tax');
  return base + tax;
});
Here, totalPrice depends on two facts. There's no connection to rule outcomes.
✅ This is fact dependency

----------------------------------------------------------------------------------
// Rule 1
engine.addRule({
  conditions: { all: [{ fact: 'score', operator: 'greaterThan', value: 90 }] },
  event: { type: 'qualified', params: { message: 'You qualified!' } }
});

// Fact that depends on outcome of Rule 1
engine.addFact('isQualified', async (params, almanac) => {
  const events = await almanac.getEvents();
  return events.some(e => e.type === 'qualified');
});

// Rule 2 depends on result of Rule 1
engine.addRule({
  conditions: { all: [{ fact: 'isQualified', operator: 'equal', value: true }] },
  event: { type: 'award', params: { message: 'User awarded!' } }
});
✅ This is rule chaining — you're using one rule’s outcome (qualified) to decide the next.