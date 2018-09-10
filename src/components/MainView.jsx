import React from 'react';

import LeftControl from './LeftControl.jsx';
import RightControl from './RightControl.jsx';
import Chart from './Chart.jsx';

import '../styles/MainView.css';

export default class MainView extends React.Component {
  render () {
    return (
      <div className='mainview_wrapper'>
        <LeftControl 
          input_title={this.props.input_title}
          handleCustomTitle={this.props.handleCustomTitle}
          handleBackgroundTextures={this.props.handleBackgroundTextures}
        />
        <Chart
          dataForChart={this.props.dataForChart}
          config={this.props.config}
          custom_title={this.props.custom_title}
          backgroundTextures={this.props.backgroundTextures}
        />
        <RightControl 
          handleCategories={this.props.handleCategories}
          handleSortBy={this.props.handleSortBy}
          handleStates={this.props.handleStates}
          removeSelectedState={this.props.removeSelectedState}
          createChart={this.props.createChart}
          stateNames={this.props.stateNames}
          statesSelected={this.props.statesSelected}
          seeDB={this.props.seeDB}
        />
      </div>
    )
  }
}