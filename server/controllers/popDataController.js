
const qs = require('qs');
const { retrieveStatePopulations, retrieveStateDensities } = require('../models/chartModel.js');
const { autoGroup } = require('../models/popAutoGoupModel.js');

module.exports = {

  populationData: (req, res) => {
    let popConfig = qs.parse(req.query.popConfig);
    let popData = qs.parse(req.query.popData);

    

    // nothing has been selected, so we are retrieving the top10 states data
    if (JSON.stringify(popData) === '{}') {
      // query db for top 10 states (in order)
      autoGroup('Top 10', (err, result) => {
        if (err) res.send(err);
        else {
          // format data
          
          let formatResult = result.map( (x,i) => {
            
            let pop = [
              x['2010_pop'], 
              x['2011_pop'], 
              x['2012_pop'],
              x['2013_pop'], 
              x['2014_pop'], 
              x['2015_pop'],   
              x['2016_pop']
            ];
            let den = [
              x['2010_den'], 
              x['2011_den'], 
              x['2012_den'],
              x['2013_den'], 
              x['2014_den'], 
              x['2015_den'],   
              x['2016_den']
            ];

            return {
              idusa_states: x.idusa_states,
              state_id: x.state_id,
              state_name: x.state_name,
              den: den,
              pop: pop
            }
          });
          
          res.send(formatResult);
        }
      })
    }
  },

  densityData: (req, res) => {

    // retrieveStateDensities( (err, results) => {
    //   if (err) {
    //     res.status(500).send(err);
    //   } else {
    //     // format results 
    //     let stateArray = results.map( result => {return result.state_name})
    //     res.status(201).send(stateArray);
    //   }
    // });
  }
};