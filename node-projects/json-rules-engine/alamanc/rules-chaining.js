const { Engine } = require('json-rules-engine');

// ------------------------
// Rule 1: Check score > 90
// ------------------------
const rule1 = {
    conditions: {
        all: [
            {
                fact: 'score',
                operator: 'greaterThan',
                value: 90
            }
        ]
    },
    event: {
        type: 'qualified',
        params: {
            message: 'User qualified!'
        }
    }
};

// -----------------------------------------------
// Rule 2: Fires only if Rule 1's event was fired
// -----------------------------------------------
const rule2 = {
    conditions: {
        all: [
            {
                fact: 'hasQualified',
                operator: 'equal',
                value: true
            }
        ]
    },
    event: {
        type: 'award',
        params: {
            message: 'User is awarded!'
        }
    }
};

// ------------------
// Engine + Fact Setup
// ------------------
const engine = new Engine();
engine.addRule(rule1);
engine.addRule(rule2);

// Custom fact that depends on outcome of Rule 1
engine.addFact('hasQualified', async (params, almanac) => {
    console.log("54")
    const events = await almanac.getEvents();
    return events.some(e => e.type === 'qualified');
});

// --------------------
// Run the engine
// --------------------
engine
    .run({ score: 85 }) // Try 85 and see how only rule1 fires
    .then(({ events }) => {
        console.log("64", events)
        console.log('\n✅ Events triggered:');
        events.forEach(event => {
            console.log(`🔹 ${event.type}: ${event.params.message}`);
        });
    })
    .catch(console.error);
