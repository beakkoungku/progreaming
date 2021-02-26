const express = require('express');
var mdbConn = require('./mariaDBConnection');
var router = express.Router();
const app = express();
const PORT = 5000;
app.get('/', (req,res) => {
  res.send('Hello World!');
  mdbConn.getUserList()
  .then((rows)=> {res.json(rows)})
  .catch((err)=> {console.log(err)})
});
app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}!`);
});

