const express = require('express');
const fetch = require('node-fetch');
const app = express();
const cors = require('cors');

app.use(cors()); // Allow all origins
app.use(express.json());

app.post('/get-base64', async (req, res) => {
    const { url } = req.body;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch image');

        const contentType = response.headers.get('content-type') || 'image/jpeg';
        const buffer = await response.arrayBuffer();
        const base64 = Buffer.from(buffer).toString('base64');

        res.json({
            base64: `data:${contentType};base64,${base64}`,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch or convert image' });
    }
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
