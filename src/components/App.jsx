
import React from 'react';
import Main from './Main.jsx';
import '../styles/App.css';

export default class App extends React.Component {
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
      this.state.isClickedToEnter
        ?  <Main />
        :  (
          <div className='site_wrapper'>
            <h1 className='site_logo'>VSON</h1>
            <div 
              className='explore_button'
              onClick={e => this.enterSite(e)}
            >
            Explore
            </div>
          </div>
        )
    )}
};

