import React from 'react';
import {scaleOrdinal} from 'd3-scale';
import {pie, arc} from 'd3-shape';

const Pie = ({data}) => {

  const width = 500;
  const height = 500;
  const radius = Math.min(width, height) / 2;

  const color = scaleOrdinal(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

  const dataArc = arc()
    .outerRadius(radius - 10)
    .innerRadius(0);

  const labelArc = arc()
    .outerRadius(radius - 40)
    .innerRadius(radius - 40);

  const pieChart = pie()
    .sort(null)
    .value(d => d.value);

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${width/2},${height/2})`}>
        {
          pieChart(data).map( (d, idx) => {
            return (
              <g 
                key={d.key}
                className="arc"
              >
                <path 
                  d={dataArc(d)}
                  fill={color(d.data.name)}
                />
                <text 
                  transform={`translate(${labelArc.centroid(d)})`}
                  dy=".5rem"
                >
                  {data[idx].name}
                </text>
              </g>
            )
          })
        }
      </g>
    </svg>
  )
};

export default Pie;