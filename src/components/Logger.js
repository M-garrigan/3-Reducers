import React from 'react';
import { connect } from 'react-redux';


const Logger = props => {

  return (
    <div className="logger-wrapper">

      <p className="logger-name">Actions</p>

      <div className="logger-output">
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
  )
};

const mapStateToProps = ({global}) => ({
  log: global.log
});


export default connect(mapStateToProps)(Logger);      