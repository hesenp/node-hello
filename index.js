
/* the first fun chat app */

var app = require('express')();
var http = require('http').Server(app); 
var io = require('socket.io')(http);

app.get('/',
	function(req,res){
	    res.sendFile(__dirname + '/index.html'); 
	})

io.on('connection',
      function(socket){
	  socket.broadcast.emit('hi'); 
	  socket.on('disconnect',
		    function(){
			console.log('user.disconnected');
		    });
	  socket.on('chat message',
		    function(msg){
			// var message = 'message: '+msg;
			// console.log(message); 
			io.emit('chat message', msg); 
		    });
      })

http.listen(3000, 
	    function(){
		console.log('listening on localhost:3000'); 
	    })
