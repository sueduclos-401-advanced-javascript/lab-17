// Main listener to driver and vendor
// records all events, console.log that they happened and will broadcast the events to anything else connected to it

// TCP Socket Server
// receive connections

const net = require('net');
const server = net.createServer();

let port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log('Server is up and running on port', port);
});