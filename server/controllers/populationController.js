const { 
  retrieveTop10Population,
  retrieveTop5Population,
  retrieveBottom10Population,
  retrieveBottom5Population
 } = require('../models/populationModel.js');

module.exports = {

  populationTop10: (req, res) => {
    retrieveTop10Population( (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(results);
      }
    });
  },

  populationTop5: (req, res) => {
    retrieveTop5Population( (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(results);
      }
    });
  },

  populationBottom10: (req, res) => {
    retrieveBottom10Population( (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(results);
      }
    });
  },

  populationBottom5: (req, res) => {
    retrieveBottom5Population( (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(results);
      }
    });
  }
};
