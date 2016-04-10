var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
	// res.send('<h1>Hello world</h1>');
	// console.log("asddf");
	// res.sendFile(__dirname + '/index.html');
	// res.sendfile('/index.html');	// express deprecated res.sendfile: Use res.sendFile instead
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
	// console.log('a user connected');
	// socket.on('disconnect', function(){
	//   console.log('user disconnected');
	// });

	socket.on('chat message', function(msg){
	    // console.log('message: ' + msg);
	    io.emit('chat message', msg);
	});

	// socket.broadcast.emit('hi');
});

http.listen(3000, function(){
	console.log('listening on *:3000');
});