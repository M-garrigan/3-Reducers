
const createTable = (tableName, schema) => {
  connection.connect( err => {
    if (err) { throw err; } 
    else {
      const sql = `CREATE TABLE ${tableName}`;
    }
  })
}

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});