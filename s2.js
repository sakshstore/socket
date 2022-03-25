const app = require('express')();
const http = require('http').Server(app);


//const io = require('socket.io')(http);


const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


app.get('/reload.html', (req, res) => {
  res.sendFile(__dirname + '/reload.html');
});


 

  

http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});
