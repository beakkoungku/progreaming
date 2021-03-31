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
