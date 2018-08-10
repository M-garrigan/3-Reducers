

import React from 'react';
import SubBanner from '../SubBanner.jsx';
import ViewArea from '../ViewArea.jsx';
import PopConfig from './PopConfig.jsx';
import '../../styles/PopulationChart.css';

export default class PopulationChart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isPopConfigOpen: false
    }
    this.toggleIsPopConfigOpen = this.toggleIsPopConfigOpen.bind(this);
  }

  toggleIsPopConfigOpen (e) {
    e.preventDefault();
    this.setState(prevState => ({
      isPopConfigOpen: !prevState.isPopConfigOpen
    }));
  }

  render() {
    return (
      <div className='population_chart_wrapper'>
        <SubBanner />
        <div className="view_wrapper">
          <ViewArea />
          <PopConfig 
            isPopConfigOpen={this.state.isPopConfigOpen}
            toggleIsPopConfigOpen={this.state.toggleIsPopConfigOpen}
          />
        </div>
      </div>
    )
  }
}