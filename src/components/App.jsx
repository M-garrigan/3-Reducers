
import React from 'react';

import Banner from './Banner.jsx';
import Main from './Main.jsx';
import '../styles/App.css';

export default class App extends React.Component {

  state = {
      dataSet: 'none'
    }

  handleDataSetChange = (e, name) => {
    e.preventDefault();
    this.setState({ dataSet: name })
  }

  resetStateToRenderHome = e => {
    e.preventDefault();
    this.setState({ dataSet: 'none' })
  }

  render() {
    
    return (
      <div className='main_wrapper'>
        <Banner dataSet={this.state.dataSet}/>
        <Main 
          dataSet={this.state.dataSet}
          handleDataSetChange={this.handleDataSetChange}
          resetStateToRenderHome={this.resetStateToRenderHome}
        />
      </div>
    );
  }
}
