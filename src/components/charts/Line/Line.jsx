
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
    console.log('data: ', data);
    const margin = 100;
    const height = containerHeight - margin;
    const width = containerWidth - margin;
    const colors = schemeCategory10;

    //console.log('sort:', data.stateData[0].sort());

    let years = ['2010', '2011', '2012', '2013', '2014', '2015', '2016'];

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
      .domain([0, years.length-1])
      .range([margin, width]);

    //console.log('xScale: ', xScale(0), xScale(1), xScale(6));

    // y scale
    const yScale = scaleLinear()
      .domain([0, max(data.stateData, d => {
        console.log('d: ', d.pop[d.pop.length - 1]);
        return d.pop[d.pop.length-1];
        }
      )])
      .range([height, margin]);

    const lineGen = line()
      .x( (d, i) => {
        console.log('lineGen x: ', d, i);
        return xScale(i)
      })
      .y( (d, i) => {
        console.log('lineGen x: ', d, i);
        return yScale(d.pop[i])
      }) 
      .curve(curveCatmullRom.alpha(0.5));
    //console.log('lineGen:', lineGen(data.stateData[0]));

    // const xTicks = xScale.ticks(years.length).map((d, i) => (
    //   xScale(i) > margin && xScale(i) < width ? 
    //     <g transform={`translate(${xScale(i)},${height+20})`}>  
    //       <text>{years[i]}</text>
    //       <line x1='0' x1='0' y1='0' y2='5' transform="translate(0,-20)"/>
    //     </g>
    //   : null
    // ))
    // console.log('ticks:', data.stateData.length-1)

    // const yTicks = yScale.ticks(data.stateData.length-1).map((d, i) => {
    //   console.log('tickY:', d, i);
    //   yScale(data.stateData[d].pop[i]) > 10 && yScale(data.stateData[d].pop[i]) < height ? 
    //     <g transform={`translate(${margin},${yScale(data.stateData[d].pop[i])})`}>  
    //       <text x="-12" y="5">{xFormat(data.stateData[d].pop[i])}</text>
    //       <line x1='0' x1='5' y1='0' y2='0' transform="translate(-5,0)"/>
    //       <line className='gridline' x1='0' x1={width - margin} y1='0' y2='0' transform="translate(-5,0)"/> 
    //     </g>
    //   : null
    // })

    //console.log('d:', lineGen(data.stateData));

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
        <path className="line-path" d={lineGen(data.stateData)}></path>
        {/* {
          data.stateData.map((d, i) => {
            console.log(lineGen(d))
            return (
              <path className="line-path" d={lineGen(d.pop)}></path>
            )
          })
        } */}
        
        {/* <g className="axis-labels">
           {xTicks}
         </g>
         <g className="axis-labels">
           {yTicks}
         </g> */}
      </svg>
    )
  }
}

export default Dimensions()(Line);