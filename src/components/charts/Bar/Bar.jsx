import React from 'react';
import {axisLeft, axisBottom} from 'd3-axis';
import {scaleLinear, scaleBand} from 'd3-scale';
import {select} from 'd3-selection';
import {schemeSet3} from 'd3-scale-chromatic';

import Dimensions from 'react-dimensions';
import './Bar.css';

const Bar = ({data, containerHeight, containerWidth}) => {
  console.log('bar data: ', data);
  console.log('color: ', schemeSet3);

  const margin = 80; 
  const yAxisTickRange = ['5 M', '10 M', '15 M', '20 M', '25 M', '30 M', '35 M', '40 M'];

  const xScale = scaleBand()
    .domain(data.stateData.map( d => d.state_name))
    .rangeRound([0, containerWidth - (margin * 2)]).padding(0.1);

  const yScale = scaleLinear()
    .domain([0, 40000000])
    .range([containerHeight - margin, 0 + margin]);

  // function to calculate the range in Millions
  function findUpperLowerBounds (data) {
    const upper = data.stateData[0].pop[6];
    const lower = data.stateData[data.stateData.length - 1].pop[6];

    return upper;
  }

  return (
    <div>
      <svg 
        className='SVG-bar-chart'
        height={containerHeight}
        width={containerWidth}
      >
      <g transform={`translate(${margin},${containerHeight - margin})`} >
        <g
          ref={node => select(node).call(axisBottom(xScale))}
        />
      </g>
      <g transform={`translate(${margin},0)`} >
        <g
          ref={node => select(node).call(axisLeft(yScale))}
        />
      </g>
      <g transform={
        `translate(${margin},0)`
        } 
      >
        {
          data.stateData.map( (d, idx) => {
            return (
              <rect
                key={d.state_name}
                fill={schemeSet3[idx]}
                x={xScale(d.state_name)}
                y={yScale(d.pop[6])}
                width={xScale.bandwidth()}
                height={containerHeight - margin - yScale(d.pop[6])}
              />
            );
          })
        }
      </g>
      </svg>
    </div>
  );
};

export default Dimensions()(Bar);