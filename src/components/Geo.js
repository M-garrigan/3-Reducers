
import React, { useState, useCallback, useLayoutEffect } from 'react';

import { geoEquirectangular, geoPath } from 'd3-geo';
import { select } from 'd3-selection';

import geoData from '../assets/GeoWorld.js';

import '../styles/Geo.css';


export default props => {

  const width = Math.floor(props.dimensions.width * 0.95);

  const projection = geoEquirectangular()
    .fitExtent([[0, 0], [width, width / 2]], geoData)
      // .scale(width / 2 / Math.PI)
      // .scale(100)
      // .translate([width / 2, width / 4])

  const path = geoPath()
    .projection(projection);

    
  return (
    <div className="geo-wrapper">
      <svg
        className="geo-svg"
        height={width / 2}
        width={width}
      >
        <path
          ref={node => select(node).datum(geoData).attr('d', path)}
          // d={}
        ></path>
      </svg>
    </div>
  )
}