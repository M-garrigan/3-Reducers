import React from 'react';
import BarChart from './charts/BarChart/BarChart.jsx';
import BubbleRoot from './charts/Bubbles/BubbleRoot.jsx';
import Pie from '../components/charts/Pie/Pie.jsx';

import '../styles/Chart.css';

export default class Chart extends React.Component {

  render() {

    if (this.props.chartSelected === "bar") {
      return (
        <div className={'custom_wrapper ' + this.props.backgroundTextures}>
          <div 
            className='custom_title'
            value={this.props.custom_title}
          >{this.props.custom_title}</div>
          <BarChart 
            config={this.props.config}
          />
        </div>
      )}
    else if (this.props.chartSelected === "pie") {
      
      return (
        <div className={'custom_wrapper ' + this.props.backgroundTextures}>
          <div 
            className='custom_title'
            value={this.props.custom_title}
          >{this.props.custom_title}</div>
          <Pie 
            // data={this.props.config.data}
          />
        </div>
      )}
    else if (this.props.config.chart === "scatter" && this.props.config.data.length !== 0) {
      return (
        <div className={'custom_wrapper ' + this.props.backgroundTextures}>
          <div 
            className='custom_title'
            value={this.props.custom_title}
          >{this.props.custom_title}</div>
          
        </div>
    )}
    else if (this.props.config.chart === "line" && this.props.config.data.length !== 0) {
      return (
        <div className={'custom_wrapper ' + this.props.backgroundTextures}>
          <div 
            className='custom_title'
            value={this.props.custom_title}
          >{this.props.custom_title}</div>
          {/* <div className='scatterplot_flex_wrapper'> */}
           
        </div>
    )}
    else if (this.props.config.chart === "area" && this.props.config.data.length !== 0) {
      return (
        <div className={'custom_wrapper ' + this.props.backgroundTextures}>
          <div 
            className='custom_title'
            value={this.props.custom_title}
          >{this.props.custom_title}</div>
          
        </div>
    )}
    else if (this.props.config.chart === "bubble" && this.props.config.data.length !== 0) {
      return (
        <div className={'custom_wrapper ' + this.props.backgroundTextures}>
          <div 
            className='custom_title'
            value={this.props.custom_title}
          >{this.props.custom_title}</div>
          
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