
import React from 'react';
import axios from 'axios';
import qs from 'qs';
import SubBanner from '../SubBanner.jsx';
import ViewArea from '../ViewArea.jsx';
import PopConfig from './PopConfig.jsx';
import '../../styles/PopulationChart.css';

export default class PopulationChart extends React.Component {
  state = {
    isPopConfigOpen: true,
    sortBy: 'Population',
    statesArray: [],
    stateData: null,
    statesSelected: [],
    currentState: 'Select A State'
  }

  toggleIsPopConfigOpen = event  => {
    event.preventDefault();
    this.setState(prevState => ({
      isPopConfigOpen: !prevState.isPopConfigOpen
    }));
  }

  handleSortBy = event => {
    event.preventDefault();
    this.setState({
      sortBy: event.target.value
    });
  }

  handleStatesSelection = event => {
    let newState = event.target.value;
    event.preventDefault();
    this.setState(prevState => ({
      currentState: newState,
      statesSelected: [...prevState.statesSelected, newState]
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
        <SubBanner />
        <div className="view_wrapper">
          <ViewArea 
            stateData={this.state.stateData}
            chart={this.props.chart}
          />
          <PopConfig 
            isPopConfigOpen={this.state.isPopConfigOpen}
            sortBy={this.state.sortBy}
            statesArray={this.state.statesArray}
            currentState={this.state.currentState}

            toggleIsPopConfigOpen={this.toggleIsPopConfigOpen}
            handleSortBy={this.handleSortBy}
            handleStatesSelection={this.handleStatesSelection}
            buildChart={this.buildChart}
            
          />
        </div>
      </div>
    )
  }
}