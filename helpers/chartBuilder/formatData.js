

// we need an array of arrays with objects in them 
// x: year y: pop


let formatDensity = (data, config, callback) => {
  let densities = [];

  if (config.chart === 'pie') {
    for (let i = 1; i < data.length; i += 1) {
      densities.push({key: data[i][1], value: data[i][0]});
    }
  }
  else if (config.chart === 'node') {
    for (let i = 1; i < data.length; i += 1) {
    densities.push({type: data[i][1], x: Math.floor(Math.random() * 20), 
      y: Math.floor(Math.random() * 10), z: Math.floor(data[i][0]/20000)})
    }

    densities.sort( (a,b) => {return b.z- a.z});
  
    if (config.categories === 'Top 10') {
      callback(null, densities.slice(0, 10));
    }
    else if (config.categories === 'Top 5') {
      callback(null, densities.slice(0, 5));
    }
    else if (config.categories === 'All') {
      callback(null, densities);
    }
    else if (null, config.categories === 'none') {
      // FIX ME
      callback(null, densities);
    }
  }
  else {
  for (let i = 1; i < data.length; i += 1) {
    densities.push({name: data[i][1], value: data[i][0]});
  }
}
  densities.sort( (a,b) => {return b.value - a.value});
  
  if (config.categories === 'Top 10') {
    callback(null, densities.slice(0, 10));
  }
  else if (config.categories === 'Top 5') {
    callback(null, densities.slice(0, 5));
  }
  else if (config.categories === 'All') {
    callback(null, densities);
  }
  else if (null, config.categories === 'none') {
    // FIX ME
    callback(null, densities);
  }
    
}

