import React from 'react';
import { connect } from 'react-redux';
import { decCount, incCount } from '../redux/actionCreators.js';

const B = props => {

  return (
    <div className="B-wrapper basic-wrapper">

      <p className="basic-name">B</p>

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
        <button onClick={() => props.decCount('B')}>-</button>
        <button onClick={() => props.incCount('B')}>+</button>
      </div>
    </div>
  )
};

const mapStateToProps = ({B, global}) => ({
  count: B.count,
  countGlobal: global.count
});

const mapDispatchToProps = dispatch => ({
  decCount: name => dispatch(decCount(name)),
  incCount: name => dispatch(incCount(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(B);