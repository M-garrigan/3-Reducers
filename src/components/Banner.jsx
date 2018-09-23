
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faDonate, faIndustry } from '@fortawesome/free-solid-svg-icons';
import '../styles/Banner.css';

const Banner = (props) => {

  return (
    <div className='banner-wrapper'>

      <div className="text-left">
        <h2 
          className="banner-logo"
          onClick={e => props.resetStateToRenderHome(e)}
        >VSON</h2>
        <h3 className="data-type">            
          {props.dataSet}
        </h3>
      </div>

      <div className="icons-right">
        <div 
          className="pop-category data-category"
          value='Population'
          onClick={e => props.handleDataSetChange(e, 'Population')}
        >
          <span className="icon-span">
            <FontAwesomeIcon
              size='4x'
              icon={faUsers}
            />
          </span>
        </div>

        <div 
          className="econ-category data-category"
          value='Economy'
          onClick={e => props.handleDataSetChange(e, 'Economy')}
        >
          <span className="icon-span">
            <FontAwesomeIcon
              size='4x'
              icon={faDonate}
            />
          </span>
        </div>

        <div 
          className="manuf-category data-category"
          value='Manufacturing'
          onClick={e => props.handleDataSetChange(e, 'Manufacturing')}
        >   
          <span className="icon-span">
            <FontAwesomeIcon
              size='4x'
              icon={faIndustry}
            />
          </span>
        </div>

      </div>
    </div>
  )
}

export default Banner;
