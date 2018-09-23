
import React from 'react';
import PopulationChart from './PopulationChart/PopulationChart.jsx';
import EconomyChart from './EconomyChart/EconomyChart.jsx';
import ManufacturingChart from './ManufacturingChart/ManufacturingChart.jsx';

import '../styles/Main.css';

export default class Main extends React.Component {
  state = {
    chart: 'bar'
    }
    
  render() {
    
    if (this.props.dataSet === 'Population') {
      return (<PopulationChart chart={this.state.chart} />)
    }
    else if (this.props.dataSet === 'Economy') {
      return (<EconomyChart />)
    }
    else if (this.props.dataSet === 'Manufacturing') {
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
}

