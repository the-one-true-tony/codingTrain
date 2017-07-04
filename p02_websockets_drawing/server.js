console.log("My socket server is running");
var express = require('express');
var socket = require('socket.io');
var app = express();
var server = app.listen(3000);
var io = socket(server);

app.use(express.static('public'));

io.sockets.on('connection', newConnection);

function newConnection(sock){
  console.log('new connection: ' + sock.id);

  sock.on('mouse', mouseMsg);
  function mouseMsg(data) {
    sock.broadcast.emit('mouse', data);
    // this line would broadcast the data to everyone even itself
    // useful in some instances but not this one
    // io.sock.emit('mouse', data);
    console.log(data);
  }
}
