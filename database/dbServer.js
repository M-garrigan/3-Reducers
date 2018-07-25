const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock',
  database: 'VSON'
});

connection.connect( err => {
  if (err) {
    console.error(`err connecting: ${err.stack}`);
    return;
  }
  console.log(`db connected as ${connection.threadId}`);
});




// const findAllStates = (callback) => {
//   connection.query(
//     'SELECT * FROM usa_states', 
//     (err, results, fields) => {
//       if (err) {callback(err);}
//       else {callback(null, results);}
//     }); 

//     // connection.query(
//     //   'SELECT * FROM usa_states')
//     //   .on('error', err => console.log(err))
//     //   .on('result', row => console.log(row));
      
// }

// module.exports = { findAllStates };