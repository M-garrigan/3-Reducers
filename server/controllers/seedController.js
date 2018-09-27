const {connection} = require('../../database/dbServer');

module.exports = {

  seedState: (req, res) => {
    const years = ['2010_pop', '2011_pop', '2012_pop', '2013_pop', '2014_pop', '2015_pop', '2016_pop'];
    console.log('test:', req.body.name);

    for (let i = 3; i <= 9; i += 1) {

      connection.query(
        `SELECT SUM(pop) as sum FROM pop_density_county_states WHERE date=${i} AND state_name='${req.body.name} Commonwealth'`, 
        (err, results) => {
          if (err) console.log('#1',err);
          else {
            console.log('sum:',i, results[0].sum);
            connection.query(
              `UPDATE usa_states 
              SET ${years[i-3]}=${results[0].sum}
              WHERE state_name='${req.body.name}'`
            ),
            (err, results) => {if (err) console.log('#2',err)}
          }
          
        }
      );
    }
  }
};