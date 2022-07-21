const app = require('express')();
const http = require('http').Server(app);
 
const port = process.env.PORT || 8080;

 
const domains=["https://blogentry.in"];




app.get('/reload', (req, res) => {
	
	 io.emit('reload', "Reload page now ");
	 
	  res.send("reload");
	  
});

 
const io = require("socket.io")(http, {
	 allowEIO3: true ,
  cors: {
    
    methods: ["GET", "POST"],
	   credentials: true,
	  
  }
});

 io.set('origins',  "https://blogentry.in");


io.on('connection', (socket) => {
 
 
 io.emit('connection', "connected");
  
  
  
});

http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});
