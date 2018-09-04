const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const {seedData} = require('../database/dbServer');

const stateRoutes = require('./routes/stateRoutes');

const app = express();

app.use(express.static(path.join(__dirname, '/../dist')));
app.use(bodyParser.json());

app.use('/states', stateRoutes);

app.get('/', (req, res) => {
  res.send();
});

const port = process.env.PORT || 8080;

app.listen(port, () => console.log('listening on port 8080...'));