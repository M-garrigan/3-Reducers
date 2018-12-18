
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
  },
  retrieveTop5Population: callback => {
    connection.query(
      'SELECT * FROM usa_states ORDER BY 2016_pop DESC LIMIT 5',
      (err, results) => {
        if (err) callback(err);
        else callback(null, results);
      }
    );
  },
  retrieveBottom10Population: callback => {
    connection.query(
      'SELECT * FROM usa_states ORDER BY 2016_pop ASC LIMIT 10',
      (err, results) => {
        if (err) callback(err);
        else callback(null, results);
      }
    );
  },
  retrieveBottom5Population: callback => {
    connection.query(
      'SELECT * FROM usa_states ORDER BY 2016_pop ASC LIMIT 5',
      (err, results) => {
        if (err) callback(err);
        else callback(null, results);
      }
    );
  },

  retrieveTop10Density: callback => {
    connection.query(
      'SELECT * FROM usa_states ORDER BY 2016_den DESC LIMIT 10',
      (err, results) => {
        if (err) callback(err);
        else callback(null, results);
      }
    );
  },
  retrieveTop5Density: callback => {
    connection.query(
      'SELECT * FROM usa_states ORDER BY 2016_den DESC LIMIT 5',
      (err, results) => {
        if (err) callback(err);
        else callback(null, results);
      }
    );
  },
  retrieveBottom10Density: callback => {
    connection.query(
      'SELECT * FROM usa_states ORDER BY 2016_den ASC LIMIT 10',
      (err, results) => {
        if (err) callback(err);
        else callback(null, results);
      }
    );
  },
  retrieveBottom5Density: callback => {
    connection.query(
      'SELECT * FROM usa_states ORDER BY 2016_den ASC LIMIT 5',
      (err, results) => {
        if (err) callback(err);
        else callback(null, results);
      }
    );
  }
};