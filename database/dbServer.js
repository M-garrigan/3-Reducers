
const mysql = require('mysql');
const { dbConfig } = require('../config.js');

const pool = mysql.createPool(dbConfig);

module.exports = { pool };

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
    'SELECT pop, state_name, state FROM pop_density_county_states WHERE date=9', function (err, results) {
      callback(err, results);
    });
};

exports.retrieveDens = (callback) => {
  connection.query(
    'SELECT density, state_name, state FROM pop_density_county_states WHERE date=9', function (err, results) {
      callback(err, results);
    });
};

exports.retrievePopRange = (callback) => {
  connection.query(
    'SELECT * FROM pop_density_county_states WHERE date BETWEEN 3 AND 9;', function (err, results) {
      callback(err, results);
    });
};

exports.retrieveDensRange = (callback) => {
  connection.query(
    'SELECT * FROM pop_density_county_states WHERE date BETWEEN 3 AND 9;', function (err, results) {
      callback(err, results);
    });
};

exports.seedDB = array => {
  const query = 'INSERT INTO pop_density_county_states (pop, density, geoname, date, date_desc, state, county, state_name) VALUES ?';
  connection.query(query, [array], (err, results) => {
    if (err) throw err;
  });
  // 'INSERT INTO usa_counties_states (state_id, state_name, county_id, county_name) VALUES ?'
}
