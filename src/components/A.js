import React from 'react';
import { connect } from 'react-redux';
import { decCount, incCount } from '../redux/actionCreators.js';

const A = props => {

  return (
    <div className="A-wrapper basic-wrapper">

      <p className="basic-name">A</p>

      <div className="basic-output">
        <p className="basic-count">
          {`Count: ${props.count}`}
        </p>
      </div>

      <div className="basic-output">
        <p className="basic-count">
          {`Global Count: ${props.countGlobal}`}
        </p>
      </div>

      <div className="button-group">
        <button onClick={() => props.decCount('A')}>-</button>
        <button onClick={() => props.incCount('A')}>+</button>
      </div>
    </div>
  )
};

const mapStateToProps = ({A, global}) => ({
  count: A.count,
  countGlobal: global.count
});

const mapDispatchToProps = dispatch => ({
  decCount: name => dispatch(decCount(name)),
  incCount: name => dispatch(incCount(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(A);