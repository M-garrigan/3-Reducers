
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faDonate, faIndustry } from '@fortawesome/free-solid-svg-icons';
import '../styles/Banner.css';

const NavBar = props => {

  return (
    <div className='banner-wrapper'>

      <div className="text-left">
        <h2 
          className="banner-logo"
          
        >VSON</h2>
        <h3 className="data-type">            
          
        </h3>
      </div>

      <div className="icons-right">
        <div 
          className="pop-category data-category"
          value='Population'
          
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

export default NavBar;
