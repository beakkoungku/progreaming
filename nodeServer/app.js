/*** models/mariaDBConn.js ***/

var mariadb = require('mariadb');

const pool = mariadb.createPool({
  host: '127.0.0.1', 
  port: 3306,
  user: 'root', 
  password: '1234',
  connectionLimit: 5,
  database: "user_data"
});

async function getUserList() {
  let conn, rows;
  try {
    conn = await pool.getConnection();
    conn.query('user_data'); // 사용할 DB 명시
    rows = await conn.query('SELECT * FROM id'); // 쿼리 실행
  }
  catch (err) { throw err; }
  finally {
    if (conn) conn.end();
    return rows;
  }
}

module.exports = { getUserList, }