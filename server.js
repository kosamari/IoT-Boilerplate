var express = require('express');
var app = express();
var port = 5030;
var ioport = 5040;
var io = require('socket.io').listen(ioport);

/*
* express server setup
*/
app.set('view engine', 'html');
app.engine('html', require('hbs').__express);

app.get('/', function (req, res) {
  res.render('controller', {port:ioport});
});

app.use(express.static(__dirname + '/public'));
app.listen(port);

/*
* socket.io setup
*/
io.on('connection', function (socket) {

  // Define socket messages used in your application
  socket.on('led', function(data) {
    socket.broadcast.emit('led', data);
  });

  socket.on('press', function(data) {
    socket.broadcast.emit('press', data);
  });


  // broadcast message when socket is disconnected
  socket.on('disconnect', function() {
    socket.broadcast.emit('disconnected');
  });

});
