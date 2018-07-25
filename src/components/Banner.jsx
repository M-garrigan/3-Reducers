
import React from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartPie, faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faChartArea, faChartBar } from '@fortawesome/free-solid-svg-icons';
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons';

import '../styles/Banner.css';

class Banner extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
     
    }
    this.seedInitData = this.seedInitData.bind(this);
  }

  seedInitData (e) {
    e.preventDefault();
    console.log('in seedInitData');
    axios.get('/seed')
      .catch( err => console.log(err))
  }

  render() {

    return (
      <div className='banner_wrapper'>
        <h2 className="banner_logo">VSON</h2>
        <div className="icon_group">
        <span className="icon_span">
          <FontAwesomeIcon
            className='icon'
            color='rgb(186, 186, 192)'
            size='8x'
            icon={faChartBar}
          />
        </span>
        <span className="icon_span">
          <FontAwesomeIcon
            className='icon'
            color='rgb(186, 186, 192)'
            size='6x'
            icon={faChartPie}
          />
        </span>
        <span className="icon_span">
          <FontAwesomeIcon
            className='icon'
            color='rgb(186, 186, 192)'
            size='8x'
            icon={faChartArea}
          />
        </span>
        <span className="icon_span">
          <FontAwesomeIcon
            className='icon'
            color='rgb(186, 186, 192)'
            size='6x'
            icon={faProjectDiagram}
          />
        </span>
        <span className="icon_span">
          <FontAwesomeIcon
            className='icon'
            color='rgb(186, 186, 192)'
            size='8x'
            icon={faChartLine}
          />
        </span>
        </div>
        <button
          className='button_done'
          onClick={e => {this.seedInitData(e)}}
        >seed</button>
        <button
          className='button_done'
        >DONE</button>
      </div>
    );
  }
}

export default Banner;