
import React from 'react';
import axios from 'axios';
import PopulationChart from './PopulationChart/PopulationChart.jsx';
import EconomyChart from './EconomyChart/EconomyChart.jsx';
import ManufacturingChart from './ManufacturingChart/ManufacturingChart.jsx';

import '../styles/Main.css';

const Main = (props) => {

  function seed (event, stateName) {
    // console.log('client', stateName);
    event.preventDefault();
    axios({
      method: 'put',
      url: '/seed',
      data: { name: stateName }
    })
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
      
  }
    
  if (props.dataSet === 'Population') {
    return (
      <PopulationChart 
        chartSelected={props.chartSelected}
        dataSet={props.dataSet} 
        handleChartSelected={props.handleChartSelected}
      />
    )
  }
  else if (props.dataSet === 'Economy') {
    return (<EconomyChart />)
  }
  else if (props.dataSet === 'Manufacturing') {
    return (<ManufacturingChart />)
  } else {
      return (
        <div className="splash-wrapper">
          <h2 className="splash-text">
            Visualizing Census.gov Data
          </h2>
          {/* <button onClick={e => seed(e, 'Wyoming')}>seed</button> */}
        </div>
      )
  }
}

export default Main;