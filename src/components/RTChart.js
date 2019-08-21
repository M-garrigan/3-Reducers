

import React, { useState, useLayoutEffect, useCallback } from 'react';
import { axisBottom, axisTop } from 'd3-axis';
import { scaleOrdinal, scaleTime } from 'd3-scale';
import { select } from 'd3-selection';

import '../styles/Main.css';

export default props => {
  const svgWidth = Math.round(props.dimensions.width * 0.95);
  const svgHeight = Math.round(svgWidth * 0.5);

  const marginTop = Math.round(svgHeight * 0.05);
  const marginLeft = Math.round(svgWidth * 0.02);

  const [now, setNow] = useState(Date.now())
  


  // time
  let timeScale = scaleTime()
    .domain([now - 1 * 55 * 60 * 1000, now])
    .range([0, svgWidth - (marginLeft * 2)])

  let timer;
  useLayoutEffect( () => {
    timer = setInterval(
      () => {
        setNow(Date.now())
        console.log('time scale called');
        timeScale = scaleTime()
          .domain([now - 1 * 55 * 60 * 1000, now])
          .range([0, svgWidth - (marginLeft * 2)]);

      }, 
      2000
    );

    return () => { 
      clearInterval(timer); 
    }
  }, [now] ); 

    
  return (
    <svg
      className="rtchart-svg"
      height={svgHeight}
      width={svgWidth}
    >
      <g transform={`translate(${marginLeft},${marginTop})`}>
        <g
          className="rtchart-bottom-axis" 
          transform={`translate(0,${svgHeight - (marginTop * 2)})`}
          ref={node => select(node).call(axisBottom(timeScale))} 
        />
        <g
          className="rtchart-top-axis" 
          transform={`translate(0, 0)`}
          ref={node => select(node).call(axisTop(timeScale))} 
        />

      </g>
    </svg>
  )
}