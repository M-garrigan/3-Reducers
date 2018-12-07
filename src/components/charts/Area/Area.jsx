
import React from 'react';
import Dimensions from 'react-dimensions';

import { axisBottom, axisLeft} from 'd3-axis';
import { area, curveNatural, curveLinear } from 'd3-shape';
import { scaleLinear, scaleOrdinal } from 'd3-scale';
import { schemeCategory10, schemeBlues } from 'd3-scale-chromatic';
import { select } from 'd3-selection';

import './Area.css';

class Area extends React.Component {
  
  render () {
    let { containerHeight, containerWidth, data } = this.props;

    const years = ['2010', '2011', '2012', '2013', '2014', '2015', '2016'];
    const margin = 80;
    const innerWidth = containerWidth - (margin * 2);
    const innerHeight = containerHeight - (margin * 2);

    const xScale = scaleLinear()
      .domain([0, 6])
      .range([0, innerWidth]);

    const yScale = scaleLinear()
      .domain([0, 40000000])
      .range([innerHeight, 0]);

    const areaChart = area()
      .x( (d, idx) => xScale(idx))
      .y0( d => yScale(0))
      .y1( (d, idx) => yScale(d))
      .curve(curveLinear)
    
    // const ord = scaleOrdinal()
    //   .domain([0,1,2,3,4,5,6])
    //   .range(years);

    // console.log('ord:', ord(0))
    // console.log('ord:', ord(2))
    // console.log('ord:', ord(6))

    const blues = schemeBlues[7];
    console.log('blue', blues);

 

    return (
      <div className="area-wrapper">
        <svg 
          width={containerWidth}
          height={containerHeight}
          className="area-svg"
        >
          <g transform={`translate(${margin},${margin})`} >
            <g transform={`translate(0,${innerHeight})`} >
              <g ref={node => select(node).call(axisBottom(xScale))} />
            </g>

            {
              data.stateData.map( (d, idx) => {
                console.log('d: ', d)
                return (
                  <path
                    key={d.pop}
                    className={`area-item-${idx}`}
                    ref={node => select(node).datum(d.pop).attr('d', areaChart)}
                    fill={blues[idx]}
                  />
                )
              })
            }
              
            <g ref={node => select(node).call(axisLeft(yScale))} />
          </g>
        </svg>
      </div>
    )
  }
}
  
export default Dimensions()(Area);