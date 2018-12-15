
const { connection } = require('../../database/dbServer.js');

module.exports = {
  retrieveTop10Population: callback => {
    connection.query(
      'SELECT * FROM usa_states ORDER BY 2016_pop DESC LIMIT 10',
      (err, results) => {
        if (err) callback(err);
        else callback(null, results);
      }
    );
  }
};