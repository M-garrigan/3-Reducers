
import React, { useState } from 'react';

import NavBar from './NavBar.js';
import Main from './Main.js';
import '../styles/App.css';

export default props => {

  const [category, setCategory] = useState('Streamer'); // 'Streamer' | 'Game'
    
  return (
    <div className='main_wrapper'>
      <NavBar
        
      />
      <Main 
        
      />
    </div>
  );
}
