

import React, { useState } from 'react';

import '../styles/Main.css';

export default props => {

  const width = Math.round(props.dimensions.width * 0.95);
  const svgHeight = Math.round(width * 0.5);
  const buttonGroupHeight = Math.round(width * 0.05);

  const [timeScale, setTimeScale] = useState(10);
    
  return (
    <div className="rtchart-wrapper">

      <svg
        className="rtchart-svg"
        height={svgHeight}
        width={width}
      ></svg>

      <div 
        className="rtchart-button-ctrl-wrapper"
        style={{height: buttonGroupHeight}}
        // height={buttonGroupHeight}
      >
          <p>Adjust Time Scale</p>
          <button 
            className={timeScale === 5
              ? "rtchart-button-active" 
              : "rtchart-button"
            }
            onClick={ () => setTimeScale(5) }
          >5 Min</button>
          <button 
            className={timeScale === 10
              ? "rtchart-button-active" 
              : "rtchart-button"
            }
            onClick={ () => setTimeScale(10) }
          >10 Min</button>
          <button 
            className={timeScale === 30
              ? "rtchart-button-active" 
              : "rtchart-button"
            }
            onClick={ () => setTimeScale(30) }
          >30 Min</button>
        </div>

    </div>
  )
}