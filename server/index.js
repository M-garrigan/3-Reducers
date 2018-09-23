const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');
const retrieveNames = require('../database/dbServer.js').retrieveNames;
const retrievePop = require('../database/dbServer.js').retrievePop;
const retrieveDens = require('../database/dbServer.js').retrieveDens;
const retrievePopRange = require('../database/dbServer.js').retrievePopRange;
const retrieveDensRange = require('../database/dbServer.js').retrieveDensRange;
const { seedTables } = require('../database/seedTables.js');

const chartRoutes = require('./routes/chartRoutes');
const stateRoutes = require('./routes/stateRoutes');

const app = express();

app.use(express.static(path.join(__dirname, '/../dist')));
app.use(bodyParser.json());

app.use('/chart', chartRoutes);
app.use('/states', stateRoutes);

app.get('/', (req, res) => {
  res.send();
});

app.get('/retrieveNames', (req, res) => {
  retrieveNames( (err, result) => {
    if (err) res.status(500).send(err);
    else res.status(201).send(result)});
});

app.get('/population', (req, res) => {
  retrievePop( (err, result) => {
    if (err) res.status(500).send(err);
    else res.status(201).send(result)});
});

app.get('/density', (req, res) => {
  retrieveDens( (err, result) => {
    if (err) res.status(500).send(err);
    else res.status(201).send(result)});
});

app.get('/populationRange', (req, res) => {
  retrievePopRange( (err, result) => {
    if (err) res.status(500).send(err);
    else res.status(201).send(result)});
});

app.get('/densityRange', (req, res) => {
  retrieveDensRange( (err, result) => {
    if (err) res.status(500).send(err);
    else res.status(201).send(result)});
});

app.get('/seed', seedTables);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log('listening on port 8080...'));
