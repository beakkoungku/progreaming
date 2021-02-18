// const { formatWithOptions } = require("util");
// const wsModule = require("ws");

// const app = require('express')();
// const http = require('http').createServer(app);


// app.get('/',(req,res)=> {
//     res.sendFile(__dirname + '/index.html');
//     // res.sendFile('index.html');
// });

// module.exports = function(_server)
// {
//     const wss = new wsModule.Server({server:_server});

//     wss.on('connection',function(ws,req){
//         ws.on('message',function(message){
//             console.log("client:"+message);
//             ws.send("echo:"+message);
//         });
//     });
    

//     ws.on('error',function(error){
//         console.log("connected error " + error)
//     })
//     ws.on("close",function(){
//         console.log("disconnected");
//     });
// }

// http.listen(3000,() =>{
//     console.log("start port 3000")
// })

const WebSocket = require("ws");
const wss = new WebSocket.Server({ host : "127.0.0.1", port : 3000});
// 처음에 웹소켓이 연결될 때, callback 함수가 실행
wss.on("connection", function(ws) {
	ws.on('message', function(message) {
        console.log(message)
    	const sendData = {
          event: 'response',
          data: null
        };
        switch(message.event) {
          case 'connection':
            console.log(message);
            break;
          case 'send':
            sendData.data = 'Hello';
            ws.send(JSON.stringify(sendData));
            break;
        }
    });
    
});
