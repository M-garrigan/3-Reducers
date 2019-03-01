const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');

const stateRoutes = require('./routes/stateRoutes.js');

const app = express();

app.use(express.static(path.join(__dirname, '/../dist')));
app.use(bodyParser.json());

app.use('/states', stateRoutes);

app.get('/', (req, res) => {
  res.send();
});

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`listening on port ${port}...`));
