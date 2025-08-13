// Fact Dependency

const { Engine, Rule } = require('json-rules-engine');

// 1. Define rule
const rule = new Rule({
    conditions: {
        all: [{
            fact: 'age',
            operator: 'greaterThanInclusive',
            value: 18
        }]
    },
    event: {
        type: 'is-adult',
        params: {
            message: 'User is an adult'
        }
    }
});

// 2. Create engine and add rule
const engine = new Engine();
engine.addRule(rule);

// 3. ✅ Declare the 'inputAge' fact so it's known to engine
engine.addFact('inputAge', async (params, almanac) => {
    return params.value; // Will be passed in engine.run()
});

// 4. Define derived fact 'age' that reads from 'inputAge'
engine.addFact('age', async (params, almanac) => {
    const age = await almanac.factValue('inputAge');
    return age;
});

// 5. Define another fact that uses age
engine.addFact('doubleAge', async (params, almanac) => {
    const age = await almanac.factValue('age');
    return age * 2;
});

// 6. Run engine with 'inputAge' passed as a runtime param
engine.run({ inputAge: 20 }).then(async ({ events, almanac }) => {
    console.log('\n✅ Events triggered:');
    events.forEach(event => console.log(event.params.message));

    const actualAge = await almanac.factValue('age');
    const double = await almanac.factValue('doubleAge');

    console.log('\n📦 Facts:');
    console.log('age:', actualAge);
    console.log('doubleAge:', double);

    const results = await almanac.getResults();
    console.log('\n📊 Rule results:', results);

    const allEvents = await almanac.getEvents();
    const filteredEvents = allEvents.filter(e => e.type === 'is-adult');
    console.log('\n🎯 Filtered Events:', filteredEvents);
}).catch(console.error);
