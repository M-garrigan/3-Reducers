
// query to api
https://api.census.gov/data/2016/pep/population?get=POP,DENSITY,GEONAME,DATE,DATE_DESC&for=county:*&key=09b74539e5fe6560aef92c955dd0fd50709768e4

// sample data returned


  [
      "POP",
      "DENSITY",
      "GEONAME",
      "DATE",
      "DATE_DESC",
      "state",
      "county"
  ],
  [
      "54571",
      null,
      "Autauga County, Alabama",
      "1",
      "4/1/2010 Census population",
      "01",
      "001"
  ]

// helper function to load database
// convert census api call to values defined in
// pop_density_county_level table
const formatValues = (data) => {
  let prepareValues = [];
    prepareValues[0] = data[0] * 1; // pop
    prepareValues[1] = Number.parseFloat(data[1]).toFixed(2) * 1; // density
    prepareValues[2] = data[2]; // geoname
    prepareValues[3] = data[3] * 1; // date
    prepareValues[4] = data[4]; // date_desc
    prepareValues[5] = data[5] * 1; // state
    prepareValues[6] = data[6] * 1; // county
    let splitStr = data[2].split(',');
    prepareValues[7] = splitStr[1].trim(); // state_name
    return prepareValues;
}


//*************************************** */
// county table stuff

const url = 'https://api.census.gov/data/2016/pep/population?get=GEONAME,DATE_DESC&for=county:*&key=09b74539e5fe6560aef92c955dd0fd50709768e4';

let formatCounty = (data) => {
  let results = [];
  let split = data[0].split(',');
  results[0] = data[2] * 1;
  results[1] = split[1].trim();
  results[2] = data[3] * 1;
  results[3] = split[0].trim();
  return results;
};

const countyQuery = 'insert into usa_counties_states (state_id, state_name, county_id, county_name) VALUES (?, ?, ?, ?)';

let county = formatCounty(data[i]);

connection.query(countyQuery, county)
      .on('error', err => {console.log(err)});

//*************************************** */
// state table stuff

const stateQuery = 'insert into usa_states (state_id, state_name) VALUES (?, ?)';


let formatState = (data) => {
  let results = [];
  let split = data[0].split(',');
  results[0] = data[2] * 1;
  results[1] = split[1].trim();

  return results;
};

const seedData = (data) => {
  let unique = null;
  for (let i = 1; i < data.length; i += 1) {
    let single = data[i][2];

    if (unique !== single) {
      unique = single;
      let states = formatState(data[i]);

      connection.query(stateQuery, states)
        .on('error', err => {console.log(err)});
    }
  }
};

///****************************************************** */
// to parse db info
findAllPopulations( (err, result) => {
  if (err) console.log(err);
  else {
    let dataObj = {};
    let state = null;
    result.forEach( (data, index) => {
      if (data.state_name !== state) {
        state = data.state_name;
        dataObj[data.state_name] = {};
        dataObj[data.state_name].name = data.state_name;
        dataObj[data.state_name].population = data.pop;
      } else {
        dataObj[data.state_name].population += data.pop;
      }
    });
  
    let dataArr = [];
    // push each obj into an array
    for (let data in dataObj) {
      dataArr.push(dataObj[data]);
    }
    // sort array from highest population to lowest
    dataArr.sort( (a,b) => {return b.population - a.population});
    // console.log('ARR', dataArr);
    callback(dataArr);
  }
});
