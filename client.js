/*
* Setup
*/

//1.  specify domain and port of your socket.io server
var socket = require('socket.io-client')('http://localhost:5040');

//2.  create instance johnny-five Arduino board.
var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

  /*
  * Define your application below
  */

  // 1. initialize your hardware
  var led = new five.Led(13);
  var button = new five.Button(8);

  // 2. Create socket message receiver
  socket.on('led', function(data){
    if(data.command === 'on'){
      led.on();
    }else if(data.command === 'off'){
      led.off();
    }
  });

  // 3. Create socket message emitter
  button.on('press', function() {
    socket.emit('press', {pin:8});
  });


  /*
  * Socket connection logger
  * Nice to console log when socket connection is lost/alive
  */
  socket.on('connect', function(){
    console.log('Socket Connected');
  });
  socket.on('disconnect', function(){
    console.log('Socket Disconnected !');
  });

  /*
  * REPL
  * You can specify command to use from node REPL. Nice for debugging.
  */
  this.repl.inject({
    blink: function(){led.blink();}
  });

});