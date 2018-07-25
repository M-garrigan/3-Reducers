
import React from 'react';
import TitleBannerDisabled from './TitleBannerDisabled.jsx';
import Main from './Main.jsx';
import Random from './Random.jsx';

import '../styles/WelcomePage.css';

class WelcomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      iChoose: false,
      randomChoice: false
    }
    this.select_IChoose = this.select_IChoose.bind(this);
    this.select_Random = this.select_Random.bind(this);
  }

  select_IChoose (e) {
    e.preventDefault();

    this.setState(prevState => ({
      iChoose: !prevState.iChoose
    }))
  }

  select_Random (e) {
    e.preventDefault();

    this.setState(prevState => ({
      randomChoice: !prevState.randomChoice
    }))
  }

  render() {
    if (this.state.iChoose) {
      return <Main />;
    }
    else if (this.state.randomChoice) {
      return <Random />;
    } 
    else {
      return (
        <div className="welcome_wrapper">
          <TitleBannerDisabled />
          <div className="buttons_welcome_page">
            <div 
              className="button_i_choose"
              onClick={e => this.select_IChoose(e)}
            >Let Me Create One</div>
            <div 
              className="button_random"
              onClick={e => this.select_Random(e)}
            >Show Me a Random Example</div>
          </div>
        </div>
      );
  }
  }
}

export default WelcomePage;