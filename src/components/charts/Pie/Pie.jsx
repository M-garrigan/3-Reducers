import React from 'react';
import PieLegend from './PieLegend.jsx';

import {pie, arc} from 'd3-shape';
import { schemeCategory10 } from 'd3-scale-chromatic';
import Dimensions from 'react-dimensions';
import './Pie.css';

class Pie extends React.Component {


  render() {
    const {data, containerHeight, containerWidth} = this.props;
    
    console.log('dimensions', containerWidth, containerHeight);

    // reduce data to array of names & array of values
    const stateNames = data.stateData.map( state => state.state_name );

    const stateValues = data.stateData.map( 
      state => state.pop[state.den.length - 1]
    );

    const margin = 100;
    const minDimension = Math.min(containerHeight, containerWidth) - margin;
    const radius = minDimension / 2;
    const color = schemeCategory10;

    const dataArc = arc()
      .outerRadius(radius - 10)
      .innerRadius(20);

    const labelArc = arc()
      .outerRadius(radius - 40)
      .innerRadius(radius - 40);

    const pieChart = pie()
      .sort(null)
      .value(d => d);

    return (
      <div className="pie-inner-layout">
        <svg width={minDimension} height={minDimension}>
          <g transform={`translate(${minDimension/2},${minDimension/2})`}>
            {
              pieChart(stateValues).map( (d, idx) => {
                return (
                  <g 
                    key={d + stateNames[idx]}
                    className="arc"
                  >
                    <path 
                      d={dataArc(d)}
                      fill={color[idx]}
                    />
                    <text 
                      transform={`translate(${labelArc.centroid(d)})`}
                      dy=".5rem"
                    >
                      {
                        Math.round(
                          (stateValues[idx] /
                          stateValues.reduce(
                            (accum, curr) => { return  accum + curr }
                          ) * 100
                        )) + '%'
                      }
                    </text>
                  </g>
                )
              })
            }
          </g>
        </svg>
        <PieLegend 
          stateNames={stateNames}
          stateValues={stateValues}
        />
        </div>
    )
  }
};

export default Dimensions()(Pie);