import React from 'react';
import { connect } from 'react-redux';

import A from './A.js';
import B from './B.js';
import Logger from './Logger.js';

import { decCountAll, incCountAll } from '../redux/actionCreators.js';

import './App.css';

const App = props => {
  
  return (
    <div className="app-wrapper">

      <div className="app-display">

        <div className="window-button-group">
          <div className="app-button-group">
            <button 
              onClick={props.decCountAll}
            >global -</button>
            <button 
              onClick={props.incCountAll}
            >global +</button>
          </div>
        
          <div className="window-group">
            <A />
            <B />
          </div>
        </div>

        <Logger />
      </div>
      
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  decCountAll: () => dispatch(decCountAll()),
  incCountAll: () => dispatch(incCountAll())
});

export default connect(
  null, 
  mapDispatchToProps
)(App);