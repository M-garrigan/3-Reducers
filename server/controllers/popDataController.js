
const qs = require('qs');
const { retrieveStatePopulations, retrieveStateDensities } = require('../models/chartModel.js');

//densityData, populationData

module.exports = {

  populationData: (req, res) => {
    let parsedObject = qs.parse(req.query.popConfig);
    let parsedObject1 = qs.parse(req.query.popData);
    console.log('popCtrl: ', parsedObject, parsedObject1);

    // reorder this array in the req obj
    // let len = Object.keys(parsedObject).length;

    // let stateArray = [];
    // for (let i = 0; i < len; i += 1) {
    //   stateArray.push(parsedObject[i]);
    // }
    
    // retrieveStatePopulations( stateArray, (err, results) => {
    //   if (err) {
    //     res.status(500).send(err);
    //   } else {
        
    //     // format the rows into total populations for each year 2010-2016 for each state
    //     let formatPop = {};
    //     results.forEach( result => {
          
    //       if (formatPop[result.state_name]) {
    //         formatPop[result.state_name][result.date] += result.pop;
            
    //       } else {
    //         formatPop[result.state_name] = {
    //           '3': 0,
    //           '4': 0,
    //           '5': 0,
    //           '6': 0,
    //           '7': 0,
    //           '8': 0,
    //           '9': 0
    //         };
    //         formatPop[result.state_name][result.date] += result.pop;
    //       }
    //     });

    //     // for some reason the pop_density_county_level table has every county listed twice
    //     // so we need to half each population 
    //     for (state in formatPop) {
    //       formatPop[state]['3'] = Math.floor(formatPop[state]['3'] / 2);
    //       formatPop[state]['4'] = Math.floor(formatPop[state]['4'] / 2);
    //       formatPop[state]['5'] = Math.floor(formatPop[state]['5'] / 2);
    //       formatPop[state]['6'] = Math.floor(formatPop[state]['6'] / 2);
    //       formatPop[state]['7'] = Math.floor(formatPop[state]['7'] / 2);
    //       formatPop[state]['8'] = Math.floor(formatPop[state]['8'] / 2);
    //       formatPop[state]['9'] = Math.floor(formatPop[state]['9'] / 2);
    //     }

    //     res.status(201).send(formatPop);
    //   }
    // });
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