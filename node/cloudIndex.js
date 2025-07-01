const express = require('express');
const ImageKit = require('imagekit');

const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

const imagekit = new ImageKit({
    publicKey: "public_rhyB6mJFoPtRWbvQGNV7SKDyKCE=",
    privateKey: "private_XtcQQ4gDRf0tcAocHbmfKvw3lcY=",
    urlEndpoint: "https://ik.imagekit.io/rghybhnpd"
});

app.get('/api/auth', async (req, res) => {
    console.log("msg")
    const result = imagekit.getAuthenticationParameters();
    res.json(result);
});

app.listen(3000, () => {
    console.log('Socket server running on http://localhost:3000');
})