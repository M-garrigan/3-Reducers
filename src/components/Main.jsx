
import React from 'react';
import PopulationChart from './PopulationChart/PopulationChart.jsx';
import EconomyChart from './EconomyChart/EconomyChart.jsx';
import ManufacturingChart from './ManufacturingChart/ManufacturingChart.jsx';

import '../styles/Main.css';

const Main = (props) => {
    
  if (props.dataSet === 'Population') {
    return (
      <PopulationChart 
        chartSelected={props.chartSelected} 
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
        </div>
      )
  }
}

export default Main;