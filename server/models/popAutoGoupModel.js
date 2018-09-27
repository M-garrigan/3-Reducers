
const { connection } = require('../../database/dbServer.js');

module.exports = {

 autoGroup: (group, callback) => {
    if (group === 'Top 10') {
      connection.query(
        'SELECT * FROM usa_states ORDER BY 2016_pop DESC LIMIT 10',
        (err, results, fields) => {
          if (err) callback(err);
          else callback(null, results);
        }
      );
    }
  }
};