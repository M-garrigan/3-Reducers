const mysql = require('mysql');
const {dbConfig} = require('../helpers/config.js');

const connection = mysql.createConnection(dbConfig);

connection.connect( err => {
  if (err) {
    console.error(`err connecting: ${err.stack}`);
    return;
  }
  console.log(`db connected as ${connection.threadId}`);
});

exports.retrieveNames = (callback) => {
  connection.query(
    'SELECT * FROM usa_states', 
    function (err, results) {
      if (err) callback(err)
      else {
        // strip off just state_names
        let names = results.map( state => state.state_name);
        callback(null, names);
      }
    })
};

exports.retrievePop = (callback) => {
  connection.query(
    'SELECT pop, state_name, state FROM pop_density_county_level WHERE date=9', function (err, results) {
      callback(err, results);
    });
};

exports.retrieveDens = (callback) => {
  connection.query(
    'SELECT density, state_name, state FROM pop_density_county_level WHERE date=9', function (err, results) {
      callback(err, results);
    });
};

exports.retrievePopRange = (callback) => {
  connection.query(
    'SELECT * FROM pop_density_county_level WHERE date BETWEEN 3 AND 9;', function (err, results) {
      callback(err, results);
    });
};

exports.retrieveDensRange = (callback) => {
  connection.query(
    'SELECT * FROM pop_density_county_level WHERE date BETWEEN 3 AND 9;', function (err, results) {
      callback(err, results);
    });
};