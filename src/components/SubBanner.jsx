
import React from 'react';
import '../styles/SubBanner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartPie, faChartLine, faChartArea, faChartBar, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';

const SubBanner = (props) => {
 
  return (
    <div className="subBanner_wrapper">
      <div className="icon-group">

        <span 
          className="sub-icon" 
          onClick={e => props.handleChartSelected(e, 'bar')}
        >
          <FontAwesomeIcon
            size='4x'
            icon={faChartBar}
          />
        </span>

        <span className="sub-icon"
          onClick={e => props.handleChartSelected(e, 'pie')}
        >
          <FontAwesomeIcon
            size='3x'
            icon={faChartPie}
          />
        </span>

        <span className="sub-icon"
          onClick={e => props.handleChartSelected(e, 'area')}
        >
          <FontAwesomeIcon
            size='4x'
            icon={faChartArea}
          />
        </span>

          <span className="sub-icon"
            onClick={e => props.handleChartSelected(e, 'graph')}
          >
            <FontAwesomeIcon
              size='3x'
              icon={faProjectDiagram}
            />
          </span>

          <span className="sub-icon"
            onClick={e => props.handleChartSelected(e, 'line')}
          >
            <FontAwesomeIcon
              size='4x'
              icon={faChartLine}
            />
          </span>

          <button 
            className="save-chart"
          >
            Save
          </button>

        </div>   
    </div>
  );
 }

 export default SubBanner;