
import React from 'react';

import Banner from './Banner.jsx';
import Main from './Main.jsx';
import '../styles/App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dataSet: 'none'
    }
    this.handleDataSetChange = this.handleDataSetChange.bind(this);
  }

  handleDataSetChange (e, name) {
    console.log('name:', name)
    e.preventDefault();
    this.setState({dataSet: name})
  }
  render() {
    
    return (
      <div className='main_wrapper'>
        <Banner dataSet={this.state.dataSet}/>
        <Main 
          dataSet={this.state.dataSet}
          handleDataSetChange={this.handleDataSetChange}
        />
      </div>
    );
  }
}
