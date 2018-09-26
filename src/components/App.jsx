
import React from 'react';

import Banner from './Banner.jsx';
import Main from './Main.jsx';
import '../styles/App.css';

export default class App extends React.Component {

  state = {
      dataSet: 'Select a Data Type',
      chartSelected: 'pie'
    }

  handleDataSetChange = (e, name) => {
    e.preventDefault();
    this.setState({ dataSet: name });
  }

  handleChartSelected = (e, chartName) => {
    console.log(chartName)
    e.preventDefault();
    this.setState({ chartSelected: chartName });
  }

  resetStateToRenderHome = e => {
    e.preventDefault();
    this.setState({ dataSet: 'Select a Data Type' });
  }

  render() {
    
    return (
      <div className='main_wrapper'>
        <Banner 
          dataSet={this.state.dataSet}
          handleDataSetChange={this.handleDataSetChange}
          resetStateToRenderHome={this.resetStateToRenderHome}
        />
        <Main 
          dataSet={this.state.dataSet}
          chartSelected={this.state.chartSelected}
          handleChartSelected={this.handleChartSelected}
        />
      </div>
    );
  }
}
