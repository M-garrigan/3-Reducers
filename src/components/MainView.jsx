import React from 'react';
import LeftControl from './LeftControl.jsx';
import RightControl from './RightControl.jsx';
import Chart from './Chart.jsx';

import '../styles/MainView.css';

class MainView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      statesArray: [],
      left: null,
      right_SortBy: 'Population',
      right_Compare: [],
      db_Data: [],
      chart: 'bar'
    }
    this.handleSortBy = this.handleSortBy.bind(this);
    this.handleStates = this.handleStates.bind(this);
  }

  handleSortBy (e) {
    e.preventDefault();
    this.setState({
      right_SortBy: e.target.value
    });
  }

  handleStates (e) {
    e.preventDefault();
    this.setState({
      statesArray: e.target.value
    });
  }

  render() {
    return (
      <div className='mainview_wrapper'>
        <LeftControl />
        <Chart/>
        <RightControl 
          handleSortBy={this.handleSortBy}
          handleStates={this.handleStates}
          statesArray={this.state.statesArray}
        />
      </div>
    );
  }
}

export default MainView;