import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


const Logger = props => (
  <div 
    className="logger-wrapper"
    data-testid="loggerWrapper"
  >

    <p className="logger-name">Actions</p>

    <div className="logger-output" data-testid="logger">
      {
        props.log.map( (item, idx) => (
          <span
            className="log"
            key={idx}
          >{item}</span>
          ))
      }
    </div>

  </div>
);

Logger.propTypes = {
  log: PropTypes.arrayOf(PropTypes.string).isRequired
}

const mapStateToProps = ({global}) => ({
  log: global.log
});


export default connect(mapStateToProps)(Logger);      