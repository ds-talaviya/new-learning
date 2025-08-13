const moment = require('moment');
const rules = require('../rules/webhook-rules.json');

function parseDate(value, format) {
    const parsed = moment(value, format, true);
    return parsed.isValid() ? parsed.toISOString() : null;
}

function applyRules(webhookName, inputData) {
    const config = rules[webhookName];
    if (!config) throw new Error(`No rules defined for ${webhookName}`);

    const result = {};

    // 1. Apply field mappings
    for (const [source, target] of Object.entries(config.mappings)) {
        result[target] = inputData[source];
    }

    // 2. Apply transformations
    if (config.transforms) {
        for (const [field, transform] of Object.entries(config.transforms)) {
            if (transform.startsWith("date:")) {
                const format = transform.split(":")[1];
                result[field] = parseDate(result[field], format);
            }
        }
    }

    return result;
}

module.exports = { applyRules };
