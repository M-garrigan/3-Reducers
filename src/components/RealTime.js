
import React, { useState, useCallback, useLayoutEffect } from 'react';

import RTChart from './RTChart.js';
import '../styles/RealTime.css';

export default props => {

  const width = Math.round(props.dimensions.width * 0.95);
  const bannerHeight = Math.round(width * 0.15);

  const [top, setTop] = useState(5);
    
  return (
    <div className="rt-wrapper">
      
      <div 
        className="rt-info-banner-wrapper"
        style={{height: bannerHeight}}
      >

        <div className="rt-featured-wrapper">
          <div className="rt-featured-image"></div>
          <div className="rt-featured-name"></div>
          <div className="rt-featured-uptime"></div>
          <div className="rt-featured-game"></div>
          <div className="rt-featured-viewers"></div>
        </div>

        <div className="rt-button-ctrl-wrapper">
          <p>Top</p>
          <button 
            className={top === 3
              ? "rt-button-active" 
              : "rt-button"
            }
            onClick={ () => setTop(3) }
          >3</button>
          <button 
            className={top === 5
              ? "rt-button-active" 
              : "rt-button"
            }
            onClick={ () => setTop(5) }
          >5</button>
          <button 
            className={top === 10
              ? "rt-button-active" 
              : "rt-button"
            }
            onClick={ () => setTop(10) }
          >10</button>
        </div>
      </div>

      <RTChart 
        dimensions={props.dimensions}
      />

    </div>
  )
}