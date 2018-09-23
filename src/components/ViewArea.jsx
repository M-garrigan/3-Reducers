
import React from 'react';
import BarChart from './BarChart.jsx';
import '../styles/ViewArea.css';

export default class ViewArea extends React.Component {
  

  render() {
    if (this.props.stateData) {
      if (this.props.chart === 'bar') {
        return ( 
          <BarChart 
            className="barChart"
            stateData={this.props.stateData} 
            data={[5, 10, 1, 3]}
          /> 
        );
      }
    } else {
      return ( <div className='viewArea_wrapper' /> )
    }
    
  }
}