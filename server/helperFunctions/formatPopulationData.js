
module.exports = {

  formatPopulationData: data => {

    return data.map( x => {
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