import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { decCount, incCount } from '../redux/actionCreators.js';

const A = props => (
  <div 
    className="A-wrapper basic-wrapper"
    data-testid="aWrapper"
  >

    <p className="basic-name">A</p>

    <div className="basic-output">
      <p className="basic-count" data-testid="display-count-a">
        {`-A- Count: ${props.count}`}
      </p>
    </div>

    <div className="basic-output">
      <p className="basic-count" data-testid="global-count-a">
        {`Global Count: ${props.countGlobal}`}
      </p>
    </div>

    <div className="button-group">
      <button data-testid="dec-count-a" onClick={() => props.decCount('A')}>-</button>
      <button data-testid="inc-count-a" onClick={() => props.incCount('A')}>+</button>
    </div>
  </div>
);

A.propTypes = {
  count: PropTypes.number.isRequired,
  countGlobal: PropTypes.number.isRequired,
  decCount: PropTypes.func.isRequired,
  incCount: PropTypes.func.isRequired
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