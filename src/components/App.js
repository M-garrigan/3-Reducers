import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import A from './A.js';
import B from './B.js';
import Logger from './Logger.js';

import { decCountAll, incCountAll } from '../redux/actionCreators.js';

import './App.css';

const App = props => (
  <div className="app-wrapper" data-testid="appWrapper">

    <div className="app-display">

      <div className="window-button-group">
        <div className="app-button-group">
          <button 
            onClick={props.decCountAll}
            className="app-button"
          >global -</button>
          <button 
            onClick={props.incCountAll}
            className="app-button"
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

App.propTypes = {
  decCountAll: PropTypes.func.isRequired,
  incCountAll: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  decCountAll: () => dispatch(decCountAll()),
  incCountAll: () => dispatch(incCountAll())
});

export default connect(
  null, 
  mapDispatchToProps
)(App);