
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

        <span className="icon_span">
          <FontAwesomeIcon
             className='icon'
             color='#444'
             size='8x'
             icon={faChartBar}
           />
         </span>

         <span className="icon_span">
           <FontAwesomeIcon
             className='icon'
             color='#444'
             size='6x'
             icon={faChartPie}
           />
         </span>

         <span className="icon_span">
           <FontAwesomeIcon
             className='icon'
             color='#444'
             size='8x'
             icon={faChartArea}
           />
         </span>

         <span className="icon_span">
           <FontAwesomeIcon
             className='icon'
             color='#444'
             size='6x'
             icon={faProjectDiagram}
           />
         </span>

         <span className="icon_span">
           <FontAwesomeIcon
             className='icon'
             color='#444'
             size='8x'
             icon={faChartLine}
           />
         </span>

         <button className="save_chart">Save</button>

        </div>
         
       </div>
     );
   }
 }