
import React, { useState } from 'react';

import NavBar from './NavBar.js';
import Main from './Main.js';
import '../styles/App.css';

export default props => {

  const [category, setCategory] = useState('Streamers'); // 'Streamers' | 'Games'
    
  return (
    <div className='app-wrapper'>
      <NavBar
        category={category}
        setCategory={setCategory}
      />
      <Main 
        
      />
    </div>
  );
}
