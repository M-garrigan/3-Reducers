
import React from 'react';

import { max, extent } from 'd3-array';
import { format } from 'd3-format';
import { scaleOrdinal, scaleLinear } from 'd3-scale';
import { line, curveCatmullRom } from 'd3-shape';
import { schemeCategory10 } from 'd3-scale-chromatic';
import Dimensions from 'react-dimensions';

import './Line.css';

class Line extends React.Component {
  
  render () {
    const {data, containerHeight, containerWidth} = this.props;
    const margin = 100;
    const height = containerHeight - margin;
    const width = containerWidth - margin;
    const colors = schemeCategory10;
    console.log(containerHeight, containerWidth);
    console.log(height, width)

    let fakeX = ['2010', '2011', '2012', '2013', '2014', '2015', '2016'];
    let fakeY = [200, 400, 600, 800, 1000, 1200, 1400];
    let dummy = [
      {date: '2010', value: 200},
      {date: '2011', value: 400},
      {date: '2012', value: 600},
      {date: '2013', value: 800},
      {date: '2014', value: 1000},
      {date: '2015', value: 1200},
      {date: '2016', value: 1400}
    ];
    let dummy1 = [
      {date: 0, value: 200},
      {date: 1, value: 400},
      {date: 2, value: 600},
      {date: 3, value: 800},
      {date: 4, value: 1000},
      {date: 5, value: 1200},
      {date: 6, value: 1400}
    ];

    const data1 = [
      {a: 1, b: 3},
      {a: 2, b: 6},
      {a: 3, b: 2},
      {a: 4, b: 12},
      {a: 5, b: 8}
    ];

    const xFormat = format('.2')

    // x scale
    const xScale = scaleLinear()
      .domain(extent(data1, d => d.a))
      .range([margin, width]);

    // y scale
    const yScale = scaleLinear()
      .domain([0, max(data1, d => d.b)])
      .range([height, margin]);

    const lineGen = line()
      .x( d => xScale(d.a))
      .y( d => yScale(d.b)) 
      .curve(curveCatmullRom.alpha(0.5));

    const xTicks = xScale.ticks(6).map(d => (
      xScale(d) > margin && xScale(d) < width ? 
        <g transform={`translate(${xScale(d)},${height+20})`}>  
          <text>{xFormat(d)}</text>
          <line x1='0' x1='0' y1='0' y2='5' transform="translate(0,-20)"/>
        </g>
      : null
    ))

    const yTicks = yScale.ticks(5).map(d => (
      yScale(d) > 10 && yScale(d) < height ? 
        <g transform={`translate(${margin},${yScale(d)})`}>  
          <text x="-12" y="5">{xFormat(d)}</text>
          <line x1='0' x1='5' y1='0' y2='0' transform="translate(-5,0)"/>
          <line className='gridline' x1='0' x1={width - margin} y1='0' y2='0' transform="translate(-5,0)"/> 
        </g>
      : null
  ))

    console.log('d:', lineGen(data1));

    return (
      <svg 
        className="line-svg"
        width={containerWidth} 
        height={containerHeight}
      >
         <line 
            className="axis" 
            x1={margin} 
            x2={width} 
            y1={height} 
            y2={height}
          />
         <line 
            className="axis" 
            x1={margin} 
            x2={margin} 
            y1={margin} 
            y2={height}
          />
        <path className="line-path" d={lineGen(data1)}></path>
        <g className="axis-labels">
           {xTicks}
         </g>
         <g className="axis-labels">
           {yTicks}
         </g>
      </svg>
    )
  }
}

export default Dimensions()(Line);