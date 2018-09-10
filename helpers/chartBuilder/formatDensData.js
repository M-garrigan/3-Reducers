
//******************* LINE or AREA ************************//
const format_line_or_area = (dataDB, callback) => {
  let dataObj = {};
  let state = null;
  let date = null;
  dataDB.forEach( (data, index) => {
    let yearMap = [null, '2010', '2011', '2012', '2013', '2014', '2015', '2016'];
    if (data.state_name !== state) {
      state = data.state_name;
      dataObj[data.state_name] = {};
      if (dataObj[data.state_name][data.date - 2]) {
        dataObj[data.state_name][data.date - 2].y += data.density; 
      } else {
        dataObj[data.state_name][data.date - 2] = {};
        dataObj[data.state_name][data.date - 2].name = data.state_name;
        dataObj[data.state_name][data.date - 2].x = yearMap[data.date - 2];
        dataObj[data.state_name][data.date - 2].y = data.density;
      }
    } else {
      if (dataObj[data.state_name][data.date - 2]) {
        dataObj[data.state_name][data.date - 2].y += data.density; 
      } else {
        dataObj[data.state_name][data.date - 2] = {};
        dataObj[data.state_name][data.date - 2].name = data.state_name;
        dataObj[data.state_name][data.date - 2].x = yearMap[data.date - 2];
        dataObj[data.state_name][data.date - 2].y = data.density;
      }
    }
  });
  
  let dataArr = [];
  // push each obj into an array
  for (let data in dataObj) {
    dataArr.push({ 'name': dataObj[data] });
  }
  
  // sort array from highest population to lowest
  dataArr.sort( (a,b) => {return b.name['7'].y - a.name['7'].y});
  
  // split into two arrays
  let xyArrays = [];
  dataArr.forEach( data => {
    xyArrays.push(data.name);
  });

  let stateNames = [];
  for (let name in xyArrays) {
    stateNames.push(xyArrays[name]['1'].name);
  };

  // final formating for xyArrays
  // result to be [ [ {}, {}, {}, ...], [ {}, {}, {}, ...], [ {}, {}, {}, ...] ]
  let finalArray = [];
  for (let i = 0; i < xyArrays.length; i += 1) {
    let temp = [];
    for (let item in xyArrays[i]) {
      temp.push(xyArrays[i][item]);
    }
    finalArray.push(temp);
  }
  callback([finalArray, stateNames]);
};

//******************* BAR ************************//
const format_bar = (dataDB, callback) => {
  let dataObj = {};
  let state = null;
  dataDB.forEach( (data, index) => {
    if (data.state_name !== state) {
      state = data.state_name;
      dataObj[data.state_name] = {};
      dataObj[data.state_name].name = data.state_name;
      dataObj[data.state_name].value = data.density;
    } else {
      dataObj[data.state_name].value += data.density;
    }
  });

  let dataArr = [];
  // push each obj into an array
  for (let data in dataObj) {
    dataArr.push(dataObj[data]);
  }
  // sort array from highest population to lowest
  dataArr.sort( (a,b) => {return b.value - a.value});
  callback(dataArr);
};

//******************* PIE ************************//
const format_pie = (dataDB, callback) => {
  let dataObj = {};
  let state = null;
  dataDB.forEach( (data, index) => {
    if (data.state_name !== state) {
      state = data.state_name;
      dataObj[data.state_name] = {};
      dataObj[data.state_name].name = data.state_name;
      dataObj[data.state_name].key = data.state_name;
      dataObj[data.state_name].value = data.density;
    } else {
      dataObj[data.state_name].value += data.density;
    }
  });

  let dataArr = [];
  // push each obj into an array
  for (let data in dataObj) {
    dataArr.push(dataObj[data]);
  }
  // sort array from highest population to lowest
  dataArr.sort( (a,b) => {return b.value - a.value});
  callback(dataArr);
};

//******************* SCATTER ************************//
const format_scatter = (dataDB, callback) => {
  let dataObj = {};
  let state = null;
  dataDB.forEach( (data, index) => {
    if (data.state_name !== state) {
      state = data.state_name;
      dataObj[data.state_name] = {};
      dataObj[data.state_name].name = data.state_name;
      dataObj[data.state_name].type = data.state_name;
      dataObj[data.state_name].x = Math.floor(Math.random() * 10);
      dataObj[data.state_name].y = Math.floor(Math.random() * 10);
      dataObj[data.state_name].z = data.density;
    } else {
      dataObj[data.state_name].z += data.density;
    }
  });

  let dataArr = [];
  // push each obj into an array
  for (let data in dataObj) {
    dataObj.z = Math.floor(dataObj.z / 2000);
    dataArr.push(dataObj[data]);
  }
  // sort array from highest population to lowest
  dataArr.sort( (a,b) => {return b.z - a.z});
  callback(dataArr);
};


//******************* CONTROLLER ************************//
const format_dens_data = (config, callback) => {
  if (config.chart === 'line' || config.chart === 'area') {
    format_line_or_area(config.data, (results) => {
      callback(results);
    });
  }
  else if (config.chart === 'bar') {
    format_bar(config.data, (results) => {
      callback(results);
    });
  }
  else if (config.chart === 'pie') {
    format_pie(config.data, (results) => {
      callback(results);
    });
  }
  else if (config.chart === 'scatter') {
    format_scatter(config.data, (results) => {
      callback(results);
    });
  }
};






const format_pop_bubble = (dataDB, callback) => {
  let dataObj = {};
  let state = null;
  dataDB.forEach( (data, index) => {
    if (data.state_name !== state) {
      state = data.state_name;
      dataObj[data.state_name] = {};
      dataObj[data.state_name].state_name = data.state_name;
      dataObj[data.state_name].state = data.state;
      dataObj[data.state_name].value = data.pop;
    } else {
      dataObj[data.state_name].value += data.pop;
    }
  });

  let dataArr = [];
  // push each obj into an array
  for (let data in dataObj) {
    dataArr.push(dataObj[data]);
  }
  // sort array from highest population to lowest
  dataArr.sort( (a,b) => {return b.value - a.value});
  callback(dataArr);
};

const format_pop_line_or_area = (dataDB, callback) => {
  let dataObj = {};
  let state = null;
  let date = null;
  dataDB.forEach( (data, index) => {
    let yearMap = [null, '2010', '2011', '2012', '2013', '2014', '2015', '2016'];
    if (data.state_name !== state) {
      state = data.state_name;
      dataObj[data.state_name] = {};
      if (dataObj[data.state_name][data.date - 2]) {
        dataObj[data.state_name][data.date - 2].y += data.pop; 
      } else {
        dataObj[data.state_name][data.date - 2] = {};
        dataObj[data.state_name][data.date - 2].name = data.state_name;
        dataObj[data.state_name][data.date - 2].x = yearMap[data.date - 2];
        dataObj[data.state_name][data.date - 2].y = data.pop;
      }
    } else {
      if (dataObj[data.state_name][data.date - 2]) {
        dataObj[data.state_name][data.date - 2].y += data.pop; 
      } else {
        dataObj[data.state_name][data.date - 2] = {};
        dataObj[data.state_name][data.date - 2].name = data.state_name;
        dataObj[data.state_name][data.date - 2].x = yearMap[data.date - 2];
        dataObj[data.state_name][data.date - 2].y = data.pop;
      }
    }
  });
  
  let dataArr = [];
  // push each obj into an array
  for (let data in dataObj) {
    dataArr.push({ 'name': dataObj[data] });
  }
  
  // sort array from highest population to lowest
  dataArr.sort( (a,b) => {return b.name['7'].y - a.name['7'].y});
  
  // split into two arrays
  let xyArrays = [];
  dataArr.forEach( data => {
    xyArrays.push(data.name);
  });

  let stateNames = [];
  for (let name in xyArrays) {
    stateNames.push(xyArrays[name]['1'].name);
  };

  // final formating for xyArrays
  // result to be [ [ {}, {}, {}, ...], [ {}, {}, {}, ...], [ {}, {}, {}, ...] ]
  let finalArray = [];
  for (let i = 0; i < xyArrays.length; i += 1) {
    let temp = [];
    for (let item in xyArrays[i]) {
      temp.push(xyArrays[i][item]);
    }
    finalArray.push(temp);
  }
  callback([finalArray, stateNames]);
};
// module.exports = {format_pop_bar, format_pop_pie, format_pop_scatter, format_pop_bubble, format_pop_line_or_area};

module.exports = { format_dens_data };