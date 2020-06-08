
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/mychat.html'));
});

users = [];
io.on('connection',function(socket) {
	console.log('A user connected');
	socket.on('setUsername',function(data) {
	console.log(data);
	if(users.indexOf(data) > -1)
	{
		socket.emit('userExists', data + ' Username already exists !! Try other username');
	}
	else
	{
		socket.emit('userSet', { username : data });
		users.push(data);
	}
	});
	
	socket.on('request', function(data) {
		io.sockets.emit('response',data);
	});
	
	socket.on('request_for_joining', function(data) { 
		socket.broadcast.emit('response_joined',data);
	});
	
	socket.on('logout',function(data) {
		var index = users.indexOf(data);
		if(index > -1)
		{
			console.log('User '+ data + ' is disconnected');
			socket.broadcast.emit('exit',data);
			users.splice(index,1);
			socket.emit('alert','Please Refresh the page to continue chatting with same/different username');
			socket.disconnect();
		}
		
	});
	
});


http.listen(3000,function() {
console.log('Server listening at port : 3000');
});

