
import React from 'react';
import Banner from './Banner.jsx';
import MainView from './MainView';
import '../styles/Main.css';

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
     
    }
  }

  render() {
    return (
      <div className='main_wrapper'>
        <Banner />
        <MainView />
      </div>
    );
  }
}

export default Main;