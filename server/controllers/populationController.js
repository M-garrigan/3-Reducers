const { retrieveTop10Population } = require('../models/populationModel.js');

module.exports = {

  populationTop10: (req, res) => {
    retrieveTop10Population( (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        console.log('pop top 10 contr:', results);
      }
    });
  
  }
};
