const express = require("express");
const http = require("http");
const socketIO = require("socket.io");

const app = express();
const server = http.createServer(app);
const users = [];

const io = socketIO(server, {
    cors: {
        origin: '*'
    }
});

io.on('connection', (socket) => {
    socket.on('sendAnswer', (data) => {
        if (data.input == 20) {
            const index = users.findIndex(user => data.userId === user.id);
            if (index !== -1) users[index].points += 1;;
        }
        io.emit('users', users);
        socket.broadcast.emit('sendAnswer', data);
    })

    socket.on('users', (name) => {
        if (typeof name !== 'string' || !name.trim()) return;
        let id = +new Date();

        const user = {
            name: name.trim(),
            id: id,
            socketId: socket.id,
            points: 0
        };
        users.push(user);
        // socket.emit this will Emit only to the newly connected user
        socket.emit('userId', id);
        // socket.broadcast.emit('users', users) will send the updated list to everyone except the user who just joined.
        // socket.broadcast.emit('users', users)
        // If you want everyone (including sender) to receive updates, use:
        io.emit('users', users);
    });

    socket.on('disconnect', () => {
        const index = users.findIndex(user => user.socketId === socket.id);
        if (index !== -1) users.splice(index, 1);
        io.emit('users', users);
    });
});

server.listen(3000, () => {
    console.log('Socket server running on http://localhost:3000');
})