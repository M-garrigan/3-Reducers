
import React from 'react';
import '../styles/SubBanner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartPie, faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faChartArea, faChartBar } from '@fortawesome/free-solid-svg-icons';
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons';

export default class SubBanner extends React.Component {
  constructor(props) {
    super(props)
  }
         
  
  render() {
    return (
      <div className="subBanner_wrapper">
        <div className="icon_group">

          <div className="chart-group">
            <span className="icon_span">
              <FontAwesomeIcon
                className='sub-icon'
                size='3x'
                icon={faChartBar}
              />
            </span>
            <span className="chart-title">Bar</span>
          </div>
          

          <span className="icon_span">
            <FontAwesomeIcon
              className='sub-icon'
              
              size='3x'
              icon={faChartPie}
            />
          </span>

          <span className="icon_span">
            <FontAwesomeIcon
              className='icon'
              color='#444'
              size='3x'
              icon={faChartArea}
            />
          </span>

          <span className="icon_span">
            <FontAwesomeIcon
              className='icon'
              color='#444'
              size='3x'
              icon={faProjectDiagram}
            />
          </span>

          <span className="icon_span">
            <FontAwesomeIcon
              className='icon'
              color='#444'
              size='3x'
              icon={faChartLine}
            />
          </span>

          <button 
            className="save_chart"
          >
            Save
          </button>

        </div>
         
       </div>
     );
   }
 }