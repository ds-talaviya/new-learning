const express = require('express');
const { applyRules } = require('./engine/ruleEngine');

const app = express();
app.use(express.json());

app.post('/webhook/:source', (req, res) => {
    const source = req.params.source;
    const data = req.body;

    console.log(source, data)
    try {
        const result = applyRules(source, data);
        res.json({ success: true, normalized: result });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
});

app.listen(3000, () => {
    console.log('🚀 Server running on http://localhost:3000');
});
