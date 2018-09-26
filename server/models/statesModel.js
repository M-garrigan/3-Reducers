
const { connection } = require('../../database/dbServer.js');

module.exports = {
  retrieveListOfStateNames: callback => {
    connection.query( 
      'SELECT state_name FROM usa_states',
      (error, results, fields) => {
        if (error) callback(error);
        else {
          callback(null, results);
        }  
      }
    );
  }
};