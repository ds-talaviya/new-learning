const Engine = require('json-rules-engine').Engine;

let engine = new Engine();

engine.addRule({
    conditions: {
        all: [
            {
                fact: "age",
                operator: "equal",
                value: 18
            }
        ]
    },
    event: {  // define the event to fire when the conditions evaluate truthy
        type: 'Group1',
        params: {
            message: 'Your are 18 years old'
        }
    }
});

engine.addRule({
    conditions: {
        all: [
            {
                fact: "name",
                operator: "equal",
                value: 'ajay'
            }
        ]
    },
    event: {  // define the event to fire when the conditions evaluate truthy
        type: 'Group1',
        params: {
            message: 'Name is Ajay'
        }
    }
});

engine.addRule({
    conditions: {
        all: [
            {
                fact: "age",
                operator: "equal",
                value: 24
            }
        ]
    },
    event: {  // define the event to fire when the conditions evaluate truthy
        type: 'Group1',
        params: {
            message: 'Your are 24 years old'
        }
    }
});

engine.addRule({
    conditions: {
        all: [
            {
                fact: "age",
                operator: "equal",
                value: 50
            }
        ]
    },
    event: {  // define the event to fire when the conditions evaluate truthy
        type: 'Group1',
        params: {
            ageMessage: 'Your are 50 years old'
        }
    }
});

let facts = {
    age: 50,
    name:'ajay'
}

engine
    .run(facts)
    .then((events) => {
        console.log(JSON.stringify(events));
    });