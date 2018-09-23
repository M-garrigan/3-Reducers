import React from 'react';
import BarChart from './charts/BarChart/BarChart.jsx';
import BubbleRoot from './charts/Bubbles/BubbleRoot.jsx';
import SVG from './SVG.jsx';
import Pie from '../components/charts/Pie/Pie.jsx';

import {dummyData} from './charts/Bubbles/dummyData.js';

import '../styles/Chart.css';

export default class Chart extends React.Component {

  render() {

    // console.log('config:', this.props.config);
    
    // if (this.props.chartSelected === '') {
    //   return (
    //   <div className={'custom_wrapper '}>
    //     <div 
    //       className='custom_title'
    //       value={this.props.custom_title}
    //     >{this.props.custom_title}</div>
    //     <BubbleRoot 
    //       setSvgRef={this.setSvgRef}
    //       dummyData={dummyData}
    //     />
    //   </div>)
    // }
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
          {/* <PieChart
            // padding={100}
            size={500}
            innerHoleSize={100}
            labels
            data={this.props.config.data}
          /> */}
        </div>
      )}
    else if (this.props.config.chart === "scatter" && this.props.config.data.length !== 0) {
      return (
        <div className={'custom_wrapper ' + this.props.backgroundTextures}>
          <div 
            className='custom_title'
            value={this.props.custom_title}
          >{this.props.custom_title}</div>
          <div className='scatterplot_flex_wrapper'>
            <ScatterplotChart
              margin={{top: 50, right: 0, bottom: 0, left: 50}}
              data={this.props.config.data}
              width={750}
              height={750}
              grid
              axes
              verticalGrid
            />
            <Legend 
              data={this.props.config.data} 
              dataId={'type'} 
              size={300} 
              styles={legendStyle}
            />
          </div>
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
            <LineChart
              margin={{top: 50, right: 0, bottom: 0, left: 50}}
              xType={'text'}
              xTicks={7}
              yTicks={5}
              data={this.props.config.data[0]}
              interpolate={'cardinal'}
              width={750}
              height={500}
              grid
              axes
            />
            {/* <Legend 
              data={this.props.config.data} 
              dataId={'type'} 
              size={300} 
              styles={legendStyle}
            />
          </div> */}
        </div>
    )}
    else if (this.props.config.chart === "area" && this.props.config.data.length !== 0) {
      return (
        <div className={'custom_wrapper ' + this.props.backgroundTextures}>
          <div 
            className='custom_title'
            value={this.props.custom_title}
          >{this.props.custom_title}</div>
          <div className='scatterplot_flex_wrapper'>
            <AreaChart
              margin={{top: 50, right: 0, bottom: 0, left: 150}}
              xType={'text'}
              // xTicks={7}
              // yTicks={5}
              data={this.props.config.data[0]}
              interpolate={'cardinal'}
              width={750}
              height={500}
              grid
              axes
            />
            <Legend 
              data={this.props.config.data[0]} 
              dataId={'name'} 
              size={300} 
              styles={legendStyle}
            />
          </div>
        </div>
    )}
    else if (this.props.config.chart === "bubble" && this.props.config.data.length !== 0) {
      return (
        <div className={'custom_wrapper ' + this.props.backgroundTextures}>
          <div 
            className='custom_title'
            value={this.props.custom_title}
          >{this.props.custom_title}</div>
          {/* <div className='scatterplot_flex_wrapper'> */}
          <BubbleRoot 
            data={this.props.config.data}
          />
            {/* <Legend 
              data={this.props.config.data} 
              dataId={'type'} 
              size={300} 
              styles={legendStyle}
            /> */}
          {/* </div> */}
        </div>
    )}
    else {
      return (
        <div className={'custom_wrapper ' + this.props.backgroundTextures}>
          <div 
            className='custom_title'
            value={this.props.custom_title}
          >{this.props.custom_title}</div>
        <BubbleRoot />
      </div>)
    }
  }
  }


   {/* <div className='save_wrapper'>
          <div className='download_cluster'>
            <button 
            className='save_button' 
            onClick={e => this.download(e)}>Download</button>
            <input 
            className='save_input'
            value={this.state.fileName}  
            onChange={e => this.handleFileName(e)} />
            <div className='save_png'>.png</div>
          </div>
        </div> */}