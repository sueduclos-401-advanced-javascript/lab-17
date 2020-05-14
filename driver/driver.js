'use strict';

// TCP Socket Connection connects to a central server

const net = require('net');
const socket = new net.Socket();

socket.connect({port:3000, host: 'localhost'}, () => {
  console.log('Connected to server');
});
