
import React, { useState, useCallback, useLayoutEffect } from 'react';

import RTChart from './RTChart.js';
import '../styles/RealTime.css';

export default props => {

  const width = Math.round(props.dimensions.width * 0.95);
  const bannerHeight = Math.round(width * 0.1);
  const timeBannerHeight = Math.round(width * 0.05);

  const [top, setTop] = useState(5);
  const [timeScale, setTimeScale] = useState(10);
    
  return (
    <div className="rt-wrapper">
      
      <div 
        className="rt-banner-wrapper"
        style={{height: bannerHeight}}
      >

        <h2>{`Top ${props.category} on Twitch`}</h2>

        <div className="rt-button-wrapper">
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

      <div 
        className="rtchart-time-banner-wrapper"
        style={{height: timeBannerHeight}}
      >
          <p>Adjust Time Scale</p>
          <button 
            className={timeScale === 5
              ? "rt-time-button-active" 
              : "rt-time-button"
            }
            onClick={ () => setTimeScale(5) }
          >5 Min</button>
          <button 
            className={timeScale === 10
              ? "rt-time-button-active" 
              : "rt-time-button"
            }
            onClick={ () => setTimeScale(10) }
          >10 Min</button>
          <button 
            className={timeScale === 30
              ? "rt-time-button-active" 
              : "rt-time-button"
            }
            onClick={ () => setTimeScale(30) }
          >30 Min</button>
        </div>


    </div>
  )
}

{/* <Card />

<div className="rt-featured-wrapper">
  <div className="rt-featured-image"></div>
  <div className="rt-featured-name"></div>
  <div className="rt-featured-uptime"></div>
  <div className="rt-featured-game"></div>
  <div className="rt-featured-viewers"></div>
</div> */}