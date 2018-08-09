import React from 'react';
import ReactDOM from 'react-dom';

import Banner from './components/Banner.jsx';
import Main from './components/Main.jsx';
import './styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dataSet: 'none'
    }
    this.handleDataSetChange = this.handleDataSetChange.bind(this);
  }

  handleDataSetChange (e) {
    e.preventDefault();
    this.setState({dataSet: e.target.value})
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


ReactDOM.render(<App />, document.getElementById('app'));