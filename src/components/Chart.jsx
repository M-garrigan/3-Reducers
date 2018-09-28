import React from 'react';

import BarChart from './charts/BarChart/BarChart.jsx';
import Area from './charts/Area/Area.jsx';
import Line from '../components/charts/Line/Line.jsx';
import Pie from '../components/charts/Pie/Pie.jsx';

import '../styles/Chart.css';

export default class Chart extends React.Component {

  render() {

    if (this.props.chartSelected === "bar") {
      return (
        <div className="chart-wrapper">
          BarChart
          {/* <BarChart 
            config={this.props.config}
          /> */}
        </div>
      )}
    else if (this.props.chartSelected === "pie") {
      
      return (
        <div className="chart-wrapper">
          <Pie 
            data={this.props.data}
          />
        </div>
      )
    }
    else if (this.props.chartSelected === "area") {
      return (
        <div className="chart-wrapper">
          <Area 
            stateData={this.props.data}
          />
        </div>
      )
    }
    else if (this.props.chartSelected === 'graph') {
      return (
        <div className={'custom_wrapper ' + this.props.backgroundTextures}>
          <div 
            className='custom_title'
            value={this.props.custom_title}
          >{this.props.custom_title}</div>
          
        </div>
    )}
    else if (this.props.chartSelected === 'line') {
      return (
        <div className="chart-wrapper">
           <Line 
            data={this.props.data}
           />
        </div>
    )}
    
    
    else {
      return (
        <div className={'custom_wrapper ' + this.props.backgroundTextures}>
          <div 
            className='custom_title'
            value={this.props.custom_title}
          >{this.props.custom_title}</div>
        </div>
      )
    }
  }
  }