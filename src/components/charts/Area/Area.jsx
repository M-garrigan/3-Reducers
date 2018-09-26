
import React from 'react';
import Dimensions from 'react-dimensions';

import { d3axis, axisBottom, scale, ticks} from 'd3-axis';
import { scaleBand, scaleTime, scaleLinear, scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';
import { select } from 'd3-selection';

import './Area.css';

const data = [
  {3: 714031, 4: 722713, 5: 731089, 6: 736879, 7: 736705, 8: 737709, 9: 741894}
];

class Area extends React.Component {
  
  render () {
    let { containerHeight, containerWidth} = this.props;
    console.log('dimensions', containerWidth, containerHeight);

    const years = ['2010', '2011', '2012', '2013', '2014', '2015', '2016'];

    const margin = {top: 50, right: 50, bottom: 50, left: 50};
    const width = containerWidth - margin.left - margin.right;
    const height = containerHeight - margin.top - margin.bottom;

    const x = scaleLinear()
      .domain([0, 6])
      .range([0, width]);

    //console.log('x:', x(2));

    const ord = scaleOrdinal()
      .domain([0, 6])
      .range(years);

    console.log('ord:', ord(2))

    const y = scaleLinear()
      .range([height, 0]);

    const z = schemeCategory10;
    // console.log('z', z);

    const xAxis = axisBottom()
      .scale(x)
      .ticks(6)
      .tickValues(years);
      console.log('xAxis:', xAxis);

//     var yAxis = d3.svg.axis()
//         .scale(y)
//         .orient("left");

// var stack = d3.layout.stack()
//     .offset("zero")
//     .values(function(d) { return d.values; })
//     .x(function(d) { return d.date; })
//     .y(function(d) { return d.value; });

// var nest = d3.nest()
//     .key(function(d) { return d.key; });

// var area = d3.svg.area()
//     .interpolate("cardinal")
//     .x(function(d) { return x(d.date); })
//     .y0(function(d) { return y(d.y0); })
//     .y1(function(d) { return y(d.y0 + d.y); });

//     var svg = d3.select("body").append("svg")
//     .attr("width", width + margin.left + margin.right)
//     .attr("height", height + margin.top + margin.bottom)
//   .append("g")
//     .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// d3.csv("data.csv", function(error, data) {
//   if (error) throw error;

//   data.forEach(function(d) {
//     d.date = format.parse(d.date);
//     d.value = +d.value;
//   });

//   var layers = stack(nest.entries(data));

  // x.domain(d3.extent(data, function(d) { return d.date; }));
  // y.domain([0, d3.max(data, function(d) { return d.y0 + d.y; })]);

  // svg.selectAll(".layer")
  //     .data(layers)
  //   .enter().append("path")
  //     .attr("class", "layer")
  //     .attr("d", function(d) { return area(d.values); })
  //     .style("fill", function(d, i) { return z(i); });

  //     svg.append("g")
  //     .attr("class", "x axis")
  //     .attr("transform", "translate(0," + height + ")")
  //     .call(xAxis);

  // svg.append("g")
  //     .attr("class", "y axis")
  //     .call(yAxis);
//})

    //let xLine = select('.x-axis')
      // .attr('className', 'x-axis')
      // .attr('transform', `translate(0, ${width})`)
      //.call(xAxis);
    //let xLineArray = [...xLine._groups[0][0]]
    //console.log('xline:', xLine);
    //console.log('xline:', xLine._groups[0][0]);

    return (
      <div className="area-wrapper">
        <svg 
          width={width}
          height={height}
          className="area-svg"
        >
          <g transform={`translate(${margin.left},${margin.top})`}>
            {/* <path> for each state */}
            <g 
              className="x-axis"
              ref={node => select(node).call(xAxis)}
              transform={`translate(0, ${width})`}
            >
            </g>
          </g>
        </svg>
      </div>
    )
  }
  
}
  

export default Dimensions()(Area);