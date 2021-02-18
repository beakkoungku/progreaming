const app = require('express')();
const http = require('http').createServer(app);

const io = require('socket.io')(http);

app.get('/',(req,res)=> {
    res.sendFile(__dirname + '/index.html');
    // res.sendFile('index.html');
});

io.on('connection',(socket) => {
    console.log('user connected');

    socket.on('chat message',(msg)=>{
        io.emit('chat message',msg);
    });

    socket.on('disconnect',() => {
        console.log('user disconnected');
    });
});

http.listen(3000,() =>{
    console.log('Connected port 3000');
});