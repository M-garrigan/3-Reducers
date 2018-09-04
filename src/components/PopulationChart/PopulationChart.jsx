
import React from 'react';
import axios from 'axios';
import SubBanner from '../SubBanner.jsx';
import ViewArea from '../ViewArea.jsx';
import PopConfig from './PopConfig.jsx';
import '../../styles/PopulationChart.css';

export default class PopulationChart extends React.Component {
  state = {
    isPopConfigOpen: true,
    sortBy: 'Population',
    statesArray: [],
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
    console.log('sort:')
    event.preventDefault();
    this.setState({
      sortBy: event.target.value
    });
  }

  handleStatesSelection = event => {
    console.log('event:', event.target.value);
    let newState = event.target.value;
    event.preventDefault();
    this.setState(prevState => ({
      currentState: newState,
      statesSelected: [...prevState.statesSelected, newState]
    }));
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
          <ViewArea />
          <PopConfig 
            isPopConfigOpen={this.state.isPopConfigOpen}
            sortBy={this.state.sortBy}
            statesArray={this.state.statesArray}
            currentState={this.state.currentState}

            toggleIsPopConfigOpen={this.toggleIsPopConfigOpen}
            handleSortBy={this.handleSortBy}
            handleStatesSelection={this.handleStatesSelection}
            
          />
        </div>
      </div>
    )
  }
}