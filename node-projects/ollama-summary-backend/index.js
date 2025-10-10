const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = 3000;

app.post('/summarize', async (req, res) => {
    let payload = req.body.data;
    const data = payload.data;
    const todo = payload.todo;
    const prompt = `${todo}:\n\n${JSON.stringify(data, null, 2)}`;

    try {
        const response = await axios.post('http://127.0.0.1:11434/api/chat', {
            model: 'phi3',
            messages: [{ role: 'user', content: prompt }],
            stream: false
        });

        res.json({ summary: response.data.message.content });
    } catch (error) {
        console.error('Ollama Error:', error.message);
        res.status(500).send('Failed to get summary from Ollama');
    }
});

app.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
});
