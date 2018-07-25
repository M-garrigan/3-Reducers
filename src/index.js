import React from 'react';
import ReactDOM from 'react-dom';
// import {hot} from 'react-hot-loader';

import WelcomePage from './components/WelcomePage.jsx';
import './styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isClickedToEnter: false
    }
    this.enterSite = this.enterSite.bind(this);
  }

  enterSite(e) {
    e.preventDefault();
    this.setState(prevState => ({
      isClickedToEnter: !prevState.isClickedToEnter
    }))
  }

  render() {
    return (
      <div className='site_wrapper'>
        {
          this.state.isClickedToEnter
          ?  <WelcomePage />
          :  (
            <div>
              <h1 className='site_logo'>VSON</h1>
              <div 
                className='explore_button_wrapper'
                onClick={e => this.enterSite(e)}
              >
                <div className='explore_button'>
                Explore
                </div>
              </div>
            </div>
          )
        }
      </div>
    )}
};

// const AppHot = hot(module)(App);

ReactDOM.render(<App />, document.getElementById('app'));