
import React from 'react';
import axios from 'axios';
import qs from 'qs';
import SubBanner from '../SubBanner.jsx';
import Chart from '../Chart.jsx';
import PopConfig from './PopConfig.jsx';
import './PopulationChart.css';
import { formatPopulationData } from '../../../server/helperFunctions/formatPopulationData.js';

export default class PopulationChart extends React.Component {
  state = {
    config: {
      sortBy: 'Population',
      autoGroup: 'Top 10',
      currentState: 'Alabama',
    },
    statesArray: [],
    data: {
      stateData: [],
      statesGroup: []
    }
  }

  componentDidMount () {
    // render list of states from db
    if (this.state.statesArray.length === 0) {
      axios.get('/states/render')
        .then(response => {
          this.setState(prevState => ({
            statesArray: [
              ...response.data
            ]
          }))
        })
        .catch(error => console.error('Error retrieving list of available states:', error));
    }

    // load some default data from the Top 10 states if stateData === null
    if (this.state.data.stateData.length === 0) {
      this.buildChart();
    }
  }

  handleSortBy = event => {
    const value = event.target.value;
    event.preventDefault();
    this.setState(prevState => ({
      config: Object.assign({}, prevState.config, {sortBy: value})
    }));
  }

  handleAutoGrouping = event => {
    const value = event.target.value;
    event.preventDefault();
    this.setState(prevState => ({
      config: Object.assign({}, prevState.config, {autoGroup: value})
    }));
  }

  handleStatesSelection = event => {
    const value = event.target.value;
    event.preventDefault();
    this.setState(prevState => ({
      config: Object.assign({}, prevState.config, {currentState: value}),
      data: Object.assign({}, prevState.data, {statesGroup: [...prevState.data.statesGroup, value]})
    }));
  }

  removeStateFromGroup = (event, idx) => {
    const value = event.target.value;
    event.preventDefault();
    this.setState(prevState => ({
      data: Object.assign(
        {}, 
        prevState.data, 
        {statesGroup: prevState.data.statesGroup.filter( (_, i) => i !== idx)}
      )
    }));
  }

  buildChart = event => {
    if (event) {
      event.preventDefault();
    }
    
    // an object to map multiple react state values into a string
    const templateStrings = {
      'PopulationTop 10': 'population_top10',
      'PopulationTop 5': 'population_top5',
      'PopulationBottom 10': 'population_bottom10',
      'PopulationBottom 5': 'population_bottom5'
    };

    let tString = templateStrings[
      `${this.state.config.sortBy}${this.state.config.autoGroup}`
    ];

    axios.get(`/states/${tString}`)
      .then( response => { 
        this.setState(prevState => ({
          data: Object.assign(
            {}, 
            prevState.data, 
            {stateData: formatPopulationData(response.data)}
          )
        }));
      })
      .catch(error => console.error(error));
  }

  render() {
    return (
      <div className='population_chart_wrapper'>
        <SubBanner 
          chartSelected={this.props.chartSelected}
          handleChartSelected={this.props.handleChartSelected}
        />
        <div className="pop-wrapper">
          <Chart 
            data={this.state.data}
            chartSelected={this.props.chartSelected}
          />
          <PopConfig 
            config={this.state.config}
            statesArray={this.state.statesArray}
            data={this.state.data}

            handleSortBy={this.handleSortBy}
            handleAutoGrouping={this.handleAutoGrouping}
            handleStatesSelection={this.handleStatesSelection}
            removeStateFromGroup={this.removeStateFromGroup}
            buildChart={this.buildChart}
            
          />
        </div>
      </div>
    )
  }
}