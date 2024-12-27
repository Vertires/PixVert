const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const canvasData = {};
let connectedUsers = 0;

app.use(express.static('public'));

io.on('connection', (socket) => {
    connectedUsers++;
    io.emit('userCount', connectedUsers);

    let username = null;

    // Handle username setup
socket.on('setUsername', (name) => {
    username = name; // Save the username on the server
    socket.emit('usernameSet', username); // Send acknowledgment to the client
});


    // Send the current canvas state to the new client
    socket.emit('canvas', canvasData);

    // Handle pixel placement
    socket.on('placePixel', (data) => {
        const key = `${data.x},${data.y}`;
        canvasData[key] = data.color;
        io.emit('updatePixel', data);
    });

    // Handle chat messages
    socket.on('chatMessage', (message) => {
        if (username) {
            io.emit('chatMessage', { username, message });
        }
    });

    // Handle disconnection
    socket.on('disconnect', () => {
        connectedUsers--;
        io.emit('userCount', connectedUsers);
    });
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
