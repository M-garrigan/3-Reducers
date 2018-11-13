import React from 'react';
import { schemeCategory10 } from 'd3-scale-chromatic';
import './Pie.css';

const PieLegend = ({stateNames, stateValues}) => {
  const roundValue = value => {
    if (typeof value !== 'number') return value;
    else {
      let splitNumber = (value + '').split('');
      let len = splitNumber.length;

      if (len === 8) {
        return splitNumber[0] + splitNumber[1] + '.' + splitNumber[2];
      } 
      if (len === 7) {
        return splitNumber[0] + '.' + splitNumber[1];
      } 
      if (len === 6) {
        return '.' + splitNumber[0];
      } 
    }
  };

  return (
    <div className='pielegend-wrapper'>
      {
        stateNames.map( (state, idx) => (
          <div className="pielegend-item"
            key={state}
          >

            <span className="pielegend-statename"
              style={{color: schemeCategory10[idx]}}
            >{state}</span>
            <span className="pielegend-statevalue">
              {roundValue(stateValues[idx])}
            </span>
          </div>
        ))
      }
    </div>
  )
};

export default PieLegend;
  