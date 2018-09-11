const axios = require('axios');
const seedDB = require('./dbServer').seedDB;

module.exports = {
  seedTables: (res, req) => {
    axios.get('https://api.census.gov/data/2016/pep/population?get=POP,DENSITY,GEONAME,DATE,DATE_DESC&for=county:*&key=')
      .then(response => {
        let format = [];
        let q = response.data;

        for (let i = 1; i < q.length; i +=1) {
          //console.log('before:', q[i])
          let inner = [];
          let split = q[i][2].split(',');

          inner[0] = +q[i][0];
          inner[1] = Math.floor(+q[i][1]);
          inner[2] = q[i][2];
          inner[3] = +q[i][3];
          inner[4] = q[i][4];
          inner[5] = +q[i][5];
          inner[6] = +q[i][6];
          inner[7] = split[1].trim();
          //console.log('in:', inner)
          if (inner[3] !== 1) { format.push(inner); }
          
        }
        seedDB(format);
      })
      .catch(err => console.log(err));
  }
}

// let format = [];
//         let q = response.data;

//         for (let i = 1; i < q.length; i +=1) {
//           console.log('QQQ: ', q[i]);
//           let inner = [];
//           let split = q[i][2].split(',');

//           inner[0] = +q[i][3];
//           inner[1] = split[1].trim();
//           inner[2] = +q[i][4];
//           inner[3] = split[0];

//           format.push(inner);
//         }
//         seedDB(format);