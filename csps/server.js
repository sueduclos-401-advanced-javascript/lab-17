'use strict';

const net = require('net');
const server = net.createServer();

let port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log('Server is up and running on port', port);
});

let socketPool = [];

const logger = (payload) => {
  console.log('got', payload);
};

server.on('connection', (socket) => {
  console.log('Socket connected to central server');
  socketPool.push(socketPool);
  socket.on('data', logger);
});
