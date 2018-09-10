

import React from 'react';
import * as d3 from 'd3';

import './BubbleChart.css';
import BubbleChart from './BubbleChart.jsx'
import Bubbles from './Bubbles.jsx';
import YearsTitles from './YearsTitles.jsx';
import GroupingPicker from './GroupingPicker.jsx';
import { createNodes } from './utils';
import { formatDataToNodes } from './vsonUtils';

import { width, height, center, yearCenters } from './Constants.js';

export default class BubbleRoot extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      data: [],
      grouping: 'all',
    }
    this.onGroupingChanged = this.onGroupingChanged.bind(this);
  }

  componentDidMount() {
    if (this.props.dummyData) {
      d3.csv('gates_money.csv')
      .then( (data) => {
        this.setState({
          data: createNodes(data),
        })
      })
      .catch(err => console.log(err));
    } else {
      d3.csv(this.props.data)
      .then( (data) => {
        this.setState({
          data: formatDataToNodes(data),
        })
      })
      .catch(err => console.log(err));
    }
  }

  onGroupingChanged (newGrouping) {
    this.setState({
      grouping: newGrouping,
    })
  }

  render() {
    const { data, grouping } = this.state
    return (
      <div className="App">
        <GroupingPicker onChanged={this.onGroupingChanged} active={grouping} />
        <BubbleChart width={width} height={height}>
          <Bubbles data={data} forceStrength={0.03} center={center} yearCenters={yearCenters} groupByYear={grouping === 'year'} />
          {
            grouping === 'year' &&
            <YearsTitles width={width} yearCenters={yearCenters} />
          }
        </BubbleChart>
      </div>
    )
  }

}