
import React from 'react';
import axios from 'axios';

import '../styles/Banner.css';

export default class Banner extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentTab: 'BAR'
    }
    this.handleCurrentTab = this.handleCurrentTab.bind(this);
    // this.seedData = this.seedData.bind(this);
  }

  // seedData(e) {
  //   e.preventDefault();
  //   axios.get('/seed')
  //     .then(res => console.log(res))
  //     .catch(err => console.log(err));
  // }

  handleCurrentTab(e) {
    this.props.handleChart(e);
    this.setState({currentTab: e.target.innerHTML});
  }
  
  render() {
    const icon = ['BAR', 'LINE', 'BUBBLE', 'AREA', 'PIE', 'SCATTER'];
    
    const iconsMapped = icon.map( (item, index) => {
      return (
        <span
          key={index}
          onClick={this.handleCurrentTab}
          className={`${this.state.currentTab === item ? 'active': ''} icon_span`}
          // className='icon_span'
          value={item}
        >{item}</span>
      )
    });

    return (
      <div className='banner_wrapper'>
        <h2 className="banner_logo">VSON</h2>

        <div 
          className="icon_group" 
          // onClick={e => this.handleActiveChart(e)}
        >
          {iconsMapped} 
          {/* <span onClick={e => this.seedData(e)}>SEED</span> */}
        </div>
      </div>
    );
  }
}