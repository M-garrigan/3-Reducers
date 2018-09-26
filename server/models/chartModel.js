
const { connection } = require('../../database/dbServer.js');

module.exports = {

  retrieveStatePopulations: (states, callback) => {
    // states will be an array of 0, 1, or many states

    let concatQueries = '';
    // if 0 return nothing 
    if (states.length === 0) callback({ message: 'No state selected.' })
    else {
      // else concatenate all queries into one string
      states.forEach( state => {
        concatQueries += `SELECT pop, date, state_name FROM pop_density_county_states WHERE (date > 2 AND state_name = '${state}');`;
      });
    }
    
    connection.query( concatQueries, (err, results, fields) => {
      if (err) { callback(err) }
      else {
        console.log('newConnection: ', results[0]);
            //   if (err) { callback(err); }
            //   else { callback(null, results); }
            // }
      }  
    });
  },

  // retrieveStateDensities: callback => {
  //   pool.getConnection( (err, connection) => {
  //     if (err) callback(err);
  //     else {
  //       connection.query(
  //         'SELECT state_name FROM usa_states', 
  //         (err, results) => {
  //           connection.release();
  //           if (err) {callback(err);}
  //           else {callback(null, results);}
  //         }
  //       );  
  //     }
  //   });
  // },

};