
const { pool } = require('../../database/dbServer.js');

module.exports = {
  retrieveListOfStates: callback => {
    pool.getConnection( (err, connection) => {
      if (err) callback(err);
      else {
        connection.query(
          'SELECT state_name FROM usa_states', 
          (err, results) => {
            connection.release();
            if (err) {callback(err);}
            else {callback(null, results);}
          }
        );  
      }
    });
  }

};