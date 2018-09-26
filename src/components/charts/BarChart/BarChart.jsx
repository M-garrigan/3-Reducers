
import React, { Component } from 'react'
import { scaleBand, scaleLinear } from 'd3-scale'

//import data from './data.js'
import Axes from './Axes.jsx'
import Bars from './Bars.jsx'

export default class BarChart extends Component {
  constructor(props) {
    super(props)
    this.xScale = scaleBand()
    this.yScale = scaleLinear()
  }

  render() {
    const margins = { top: 50, right: 20, bottom: 100, left: 150 }
    const svgDimensions = {
      width: 750,
      height: 500
    }

    const maxValue = Math.max(...this.props.config.data.map(d => +d.value))

    const xScale = this.xScale
      .padding(0.5)
      .domain(this.props.config.data.map(d => d.name))
      .range([margins.left, svgDimensions.width - margins.right])

    const yScale = this.yScale
      .domain([0, maxValue])
      .range([svgDimensions.height - margins.bottom, margins.top])

    return (
      // <svg width="90%" height="80%">
      <svg width={svgDimensions.width} height={svgDimensions.height}> 
        <Axes
          scales={{ xScale, yScale }}
          margins={margins}
          svgDimensions={svgDimensions}
        />
        <Bars
          scales={{ xScale, yScale }}
          margins={margins}
          data={this.props.config.data}
          maxValue={maxValue}
          svgDimensions={svgDimensions}
        />
      </svg>
    )
  }
}
