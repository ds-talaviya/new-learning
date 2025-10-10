const express = require("express");
const fs = require("fs");
const cors = require("cors");
const data = require('./data.json');
const { JWTMiddleware } = require("./JWTMidleware");

const app = express();
const PORT = 8000;
app.use(cors({ origin: 'http://localhost:4200' }))
app.use(JWTMiddleware);
app.use(express.json());

// GET users with pagination
app.get('/users', (req, res) => {
    let query = JSON.parse(req.query.data);
    let pageNumber = query.pageNumber;
    let pageSize = query.pageSize;
    res.send(data.slice(pageNumber * pageSize, pageNumber * pageSize + pageSize));
});

// POST new user
app.post('/users', (req, res) => {
    let reqData = {
        ...req.body, id: data.length + 1
    };
    data.unshift(reqData);
    fs.writeFile('./data.json', JSON.stringify(data), (err) => {
        if (err) {
            res.status(500).json({ message: 'Try again' }); // fixed status
        } else {
            res.send(reqData);
        }
    });
});

// PATCH user
app.patch('/users/:id', (req, res) => { // fixed route typo
    let reqData = {
        ...req.body, first_name: req.body.first_name + Math.random()
    };
    const userId = req.params.id;
    const index = data.findIndex(u => u.id == userId);
    if (index > -1) {
        data[index] = reqData;
        fs.writeFile('./data.json', JSON.stringify(data), (err) => {
            if (err) {
                res.status(500).json({ message: 'Try again' }); // fixed status
            } else {
                res.status(201).json({ message: 'success' });
            }
        });
    } else {
        res.status(404).json({ message: 'User not found' }); // fixed status
    }
});

// DELETE user
app.delete('/users/:id', (req, res) => {
    const userId = req.params.id;
    const index = data.findIndex(u => u.id == userId);
    if (index > -1) {
        data.splice(index, 1); // fixed index
        fs.writeFile('./data.json', JSON.stringify(data), (err) => {
            if (err) {
                res.status(500).json({ message: 'Try again' }); // fixed status
            } else {
                res.status(201).json({ message: 'success' });
            }
        });
    } else {
        res.status(404).json({ message: 'User not found' }); // fixed status
    }
});

// GET single user
app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    const user = data.find(u => u.id == userId);
    if (user) {
        res.json(user); // fixed logic
    } else {
        res.status(404).json({ message: "User not found" });
    }
})

app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));