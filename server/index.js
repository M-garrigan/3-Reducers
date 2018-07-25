const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');

const {seedData} = require('../database/dbServer');

const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, '/../dist')));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send();
});




app.get('/seed', (req, res) => {
  axios.get(url)
      .then(response => {
        seedData(response.data);
      })
      .catch(err => console.log(err));
})

    

app.listen(port, () => console.log('listening on port 8080...'));