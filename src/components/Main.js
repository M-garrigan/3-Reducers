
import React from 'react';

import RealTime from './RealTime.js';
import Geo from './Geo.js';

import '../styles/Main.css';

export default props => {
    
  return (
    <div className="main-wrapper">
      <RealTime />
      <Geo />
    </div>
  )
}