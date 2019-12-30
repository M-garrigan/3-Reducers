import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { decCount, incCount } from '../redux/actionCreators.js';

const B = props => (
  <div 
    className="B-wrapper basic-wrapper"
    data-testid="bWrapper"
  >

    <p className="basic-name">B</p>

    <div className="basic-output">
      <p className="basic-count" data-testid="display-count-b">
        {`-B- Count: ${props.count}`}
      </p>
    </div>

    <div className="basic-output">
      <p className="basic-count" data-testid="global-count-b">
        {`Global Count: ${props.countGlobal}`}
      </p>
    </div>

    <div className="button-group">
      <button data-testid="dec-count-b" onClick={() => props.decCount('B')}>-</button>
      <button data-testid="inc-count-b" onClick={() => props.incCount('B')}>+</button>
    </div>
  </div>
);

B.propTypes = {
  count: PropTypes.number.isRequired,
  countGlobal: PropTypes.number.isRequired,
  decCount: PropTypes.func.isRequired,
  incCount: PropTypes.func.isRequired
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