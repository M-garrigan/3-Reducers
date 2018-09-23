
import React from 'react';

import Banner from './Banner.jsx';
import Main from './Main.jsx';
import '../styles/App.css';

export default class App extends React.Component {

  state = {
      dataSet: 'Select a Data Type'
    }

  handleDataSetChange = (e, name) => {
    e.preventDefault();
    this.setState({ dataSet: name })
  }

  resetStateToRenderHome = e => {
    e.preventDefault();
    this.setState({ dataSet: 'Select a Data Type' })
  }

  render() {
    
    return (
      <div className='main_wrapper'>
        <Banner 
          dataSet={this.state.dataSet}
          handleDataSetChange={this.handleDataSetChange}
          resetStateToRenderHome={this.resetStateToRenderHome}
        />
        <Main 
          dataSet={this.state.dataSet}
        />
      </div>
    );
  }
}
