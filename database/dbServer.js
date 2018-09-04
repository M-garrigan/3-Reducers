const mysql = require('mysql');
const { dbConfig } = require('../config.js');

const pool = mysql.createPool(dbConfig);

module.exports = { pool };