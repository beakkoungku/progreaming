const express = require('express');
var mdbConn = require('./mariaDBConnection');
// const app = express();


const port = 5000;
const hostname = '127.0.0.1';
const http = require('http');
var fs = require('fs');



// app.get('/', (req,res) => {
//   /*
//   mariadb connection, fucntion call
//   function
//   getUserList()
//   DB 쿼리 실행해 유저 이름 가져옴
//   */
//   mdbConn.getUserList()  
//   // .then((rows)=> {res.json(rows)})
//   .then((rows)=> {console.log(rows)})
//   .catch((err)=> {console.log(err)})

//   /*
//   mariadb end
//    */
// });

// app.listen(port, () => {
//   console.log(`App is listening on port ${port}!`);
// });


http.createServer(function (req, res) {
    
  fs.readFile('./index.html', 'utf8', function(err, data) {
      // the data is passed to the callback in the second argument
      //console.log(data);
      // writeHead: 응답 헤더를 작성합니다.
      // 200: 응답 성공, text/html: html문서
      res.writeHead(200, {'Content-Type': 'text/html'});
      // end: 응답 본문을 작성합니다.
      /*
      mariadb connection, fucntion call
      function
      getUserList()
      DB 쿼리 실행해 유저 이름 가져옴
      */
      mdbConn.getUserList()  
      // .then((rows)=> {res.json(rows)})
      .then((rows)=> {console.log(rows)})
      .catch((err)=> {console.log(err)})

      /*
      mariadb end
      */
      res.end(data);
  });
  // listen: 매개변수로 포트와 호스트를 지정합니다.
}).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});




