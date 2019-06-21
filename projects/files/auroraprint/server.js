const browserify = require('browserify-middleware');
const glslify = require('glslify');
const express = require('express');

var SerialPort = require("serialport");
var parsers = SerialPort.parsers;

var port = new SerialPort('/dev/cu.usbmodem14441', {
  baudrate: 115200,
  parser: parsers.readline('\r\n')
});

const app = express()
  .use('/js', browserify('./client', {transform: [glslify]}))
  .use(express.static('./public'))
  .listen(process.env.PORT || 3000);

var io = require('socket.io')(app);

port.on('open', function() {
    console.log('Port open');
});

port.on('data', function(data) {
    io.sockets.emit('mysocket', data);
    console.log(data);
});
