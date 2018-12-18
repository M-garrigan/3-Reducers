const { 
  retrieveTop10Population,
  retrieveTop5Population,
  retrieveBottom10Population,
  retrieveBottom5Population,
  retrieveTop10Density,
  retrieveTop5Density,
  retrieveBottom10Density,
  retrieveBottom5Density
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
  },

  densityTop10: (req, res) => {
    retrieveTop10Density( (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(results);
      }
    });
  },

  densityTop5: (req, res) => {
    retrieveTop5Density( (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(results);
      }
    });
  },

  densityBottom10: (req, res) => {
    retrieveBottom10Density( (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(results);
      }
    });
  },

  densityBottom5: (req, res) => {
    retrieveBottom5Density( (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(results);
      }
    });
  }
};
