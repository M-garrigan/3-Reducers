
const { retrieveListOfStateNames } = require('../models/statesModel.js');

module.exports = {

  renderStates: (req, res) => {
    
    retrieveListOfStateNames( (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        // format results 
        let stateArray = results.map( result => {return result.state_name})
        res.status(201).send(stateArray);
      }
    });
  }
};