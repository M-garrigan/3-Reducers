
const qs = require('qs');
const { retrieveStatePopulations, retrieveStateDensities } = require('../models/chartModel.js');
const { autoGroup } = require('../models/popAutoGoupModel.js');

module.exports = {

  populationData: (req, res) => {
    let popConfig = qs.parse(req.query.popConfig);
    let popData = qs.parse(req.query.popData);

    console.log('ctrl:', popConfig, popData);

    // nothing has been selected, so we are retrieving the top10 states data
    if (JSON.stringify(popData) === '{}') {
      // query db for top 10 states (in order)
      autoGroup('Top 10', (err, result) => {
        if (err) res.send(err);
        else res.send(result);
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