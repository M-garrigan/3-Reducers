
import React from 'react';
import axios from 'axios';
import qs from 'qs';
import SubBanner from '../SubBanner.jsx';
import Chart from '../Chart.jsx';
import PopConfig from './PopConfig.jsx';
import './PopulationChart.css';

export default class PopulationChart extends React.Component {
  state = {
    sortBy: 'Population',
    autoGroup: 'Top 10',
    currentState: 'Alabama',
    statesArray: [],
    stateData: null,
    statesGroup: []
  }

  handleSortBy = event => {
    event.preventDefault();
    this.setState({
      sortBy: event.target.value
    });
  }

  handleAutoGrouping = event => {
    event.preventDefault();
    this.setState({
      autoGroup: event.target.value
    });
  }

  handleStatesSelection = event => {
    let newState = event.target.value;
    event.preventDefault(event.target.value);
    this.setState(prevState => ({
      currentState: newState,
      statesGroup: [...prevState.statesGroup, newState]
    }));
  }

  removeStateFromGroup = (event, idx) => {
    event.preventDefault();
    this.setState(prevState => ({
      statesGroup: prevState.statesGroup.filter( (_, i) => i !== idx)
    }));
  }

  buildChart = event => {
    event.preventDefault();

    axios.get(
      `/chart/${this.state.sortBy}`, 
      { params: { states: qs.stringify(this.state.statesSelected) } }
    )
    .then( response => { 
      this.setState({
        stateData: response.data
      });
     })
    .catch(error => console.error(error));
  }

  render() {
    // render list of states from db
    if (this.state.statesArray.length === 0) {
      axios.get('/states/render')
        .then(response => {
          this.setState(prevState => ({
            statesArray: [
              ...prevState.statesArray,
              ...response.data
            ]
          }))
        })
        .catch(error => console.error('Error retrieving list of available states:', error));
    }
    
    return (
      <div className='population_chart_wrapper'>
        <SubBanner 
          handleChartSelected={this.props.handleChartSelected}
        />
        <div className="pop-wrapper">
          <Chart 
            stateData={this.state.stateData}
            chartSelected={this.props.chartSelected}
          />
          <PopConfig 
            currentState={this.state.currentState}
            sortBy={this.state.sortBy}
            statesArray={this.state.statesArray}
            statesGroup={this.state.statesGroup}

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