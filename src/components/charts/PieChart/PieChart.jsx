
import React from 'react';
import {PieChart} from 'react-easy-chart';

const Pie = (props) => (
  
  <PieChart
    size={400}
    innerHoleSize={50}
    padding={50}
    data={[
      { key: 'A', value: 100, color: '#aaac84' },
      { key: 'B', value: 200, color: '#dce7c5' },
      { key: 'C', value: 50, color: '#e3a51a' }
    ]}
  />
)

export default Pie;