const {connection} = require('../../database/dbServer');

module.exports = {

  seedState: (req, res) => {
    const years = ['2010_den', '2011_den', '2012_den', '2013_den', '2014_den', '2015_den', '2016_den'];
    console.log('test:', req.body.name);

    for (let i = 3; i <= 9; i += 1) {

      connection.query(
        `SELECT AVG(density) as avg FROM pop_density_county_states WHERE date=${i} AND state_name='${req.body.name}'`, 
        (err, results) => {
          if (err) console.log('#1',err);
          else {
            console.log('avg:',i, Math.round(results[0].avg));
            connection.query(
              `UPDATE usa_states 
              SET ${years[i-3]}=${Math.round(results[0].avg)}
              WHERE state_name='${req.body.name}'`
            ),
            (err, results) => {if (err) console.log('#2',err)}
          }
          
        }
      );
    }
  }
};