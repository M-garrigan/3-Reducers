
const truncateData = (sortedArray, config, callback) => {
  
  if (config.statesSelected.length > 0) {

    let selected = config.statesSelected;
    console.log('selected', selected);
    selected = selected.map( item => {return item.toLowerCase()});
    
    let matched = [];
    sortedArray.forEach( item => {
      if (selected.includes(item.name.toLowerCase())) {
        matched.push(item);
      }
    });
    callback(matched);
  }
  else if (config.categories === "Top 10") {
    callback(sortedArray.slice(0, 10));
  }
  else if (config.categories === "Top 5") {
    callback(sortedArray.slice(0, 5));
  }
  else if (config.categories === "All") {
    callback(sortedArray);
  }
};

const truncateData2Items = (sortedArray, config, callback) => {
  if (config.statesSelected.length > 0) {

    let selected = config.statesSelected;
    selected = selected.map( item => {return item.toLowerCase()});
    
    let matched = [];
    sortedArray.forEach( item => {
      if (selected.includes(item.name.toLowerCase())) {
        matched.push(item);
      }
    });
    callback(matched);
  }
  else if (config.categories === "Top 10") {
    callback([sortedArray[0].slice(0, 10)],[sortedArray[1].slice(0, 10)]);
  }
  else if (config.categories === "Top 5") {
    callback([sortedArray[0].slice(0, 5)],[sortedArray[1].slice(0, 5)]);
  }
  else if (config.categories === "All") {
    callback(sortedArray);
  }
};

module.exports = {truncateData, truncateData2Items};