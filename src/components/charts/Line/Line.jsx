
import React from 'react';

import { max } from 'd3-array';
import { axisLeft, axisBottom } from 'd3-axis';
import { scaleLinear } from 'd3-scale';
import { select } from 'd3-selection';
import { line } from 'd3-shape';
import Dimensions from 'react-dimensions';

import './Line.css';

class Line extends React.Component {
  
  render () {
    const {data, containerHeight, containerWidth} = this.props;
    const margin = 80;
    const innerHeight = containerHeight - (margin * 2);
    const innerWidth = containerWidth - (margin * 2);
  
    let years = ['2010', '2011', '2012', '2013', '2014', '2015', '2016'];

    // x scale
    const xScale = scaleLinear()
      .domain([0, 7])
      .range([0, innerWidth]);

    // y scale
    const yScale = scaleLinear()
      .domain([0, max(data.stateData, d => { 
        return d.pop[d.pop.length-1];
      })])
      .range([innerHeight, 0]);

    const lineGen = line()
      .x( (d, i) => { return xScale(i) })
      .y( d => { return yScale(d) }); 
  
    return (
      <div className="line-svg-wrapper">
        <svg 
          className="line-svg"
          width={containerWidth} 
          height={containerHeight}
        >
          <g transform={`translate(${margin}, ${margin})`}>
            <g
              className="xAxis" 
              transform={`translate(0,${innerHeight})`}
              ref={node => select(node).call(axisBottom(xScale))} 
            />
            <g 
              className="yAxis"
              ref={node => select(node).call(axisLeft(yScale))}
            />
            {
              data.stateData.map( d => {
                return (
                  <path 
                    className="line-path"
                    ref={node => select(node).datum(d.pop).attr('d', lineGen)}
                    key={d.state_name}
                  />
                )
              })
            }
          </g>
        </svg>
      </div>
    )
  }
}

export default Dimensions()(Line);