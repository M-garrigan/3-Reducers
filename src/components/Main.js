
import React, { useState, useCallback, useLayoutEffect }  from 'react';

import RealTime from './RealTime.js';
import Geo from './Geo.js';

import '../styles/Main.css';

function getDimensionObject(node) {
  const rect = node.getBoundingClientRect();

  return {
      width: rect.width,
      height: rect.height,
  };
}

export default props => {

  const [dimensions, setDimensions] = useState({width: 960, height: 500});
  const [node, setNode] = useState(null);

  const wrapRef = useCallback(node => {
      setNode(node);
  }, []);

  useLayoutEffect(() => {
    if (node) {
      const measure = () =>
        window.requestAnimationFrame(() => {
          let {width, height} = getDimensionObject(node);
          setDimensions({ 
            width: Math.round(width), 
            height: Math.round(height) 
          })
        });
      
      measure();

      window.addEventListener("resize", measure);

      return () => { window.removeEventListener("resize", measure); };
      }
  }, [node]);
    
  return (
    <div className="main-wrapper" ref={wrapRef}>
      <RealTime 
        dimensions={dimensions}
      />
      <Geo 
        dimensions={dimensions}
      />
    </div>
  )
}