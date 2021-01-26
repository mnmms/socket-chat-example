const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http); // socket.io 와 http 를 연결

app.get('/', (req, res) => {
  // res.send('<h1>Hello World</h1>');
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', socket => { // connection event
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  socket.on('chat message', msg => {
    console.log('message: ', msg);
  })
})

http.listen(port = 4000, () => {
  console.log('listening on *:', port);
});