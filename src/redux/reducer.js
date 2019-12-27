
import { combineReducers } from 'redux';

const reducer_A = (state = {count: 0}, action) => {

  switch (action.type) {

    case 'INC_A':
      return ({count: state.count + 1});

    case 'DEC_A':
      return ({count: state.count - 1});

    case 'INC_ALL':
      return ({count: state.count + 1});

    case 'DEC_ALL':
      return ({count: state.count - 1});

    default: 
      return state;
  }
};

const reducer_B = (state = {count: 0}, action) => {

  switch (action.type) {

    case 'INC_B':
      return ({count: state.count + 1});

    case 'DEC_B':
      return ({count: state.count - 1});

    case 'INC_ALL':
      return ({count: state.count + 1});

    case 'DEC_ALL':
      return ({count: state.count - 1});

    default: 
      return state;
  }
};


const reducer_global = (state = {count: 0, log: []}, action) => {
  const { count, log } = state;

  switch (action.type) {

    case 'DEC_ALL':
      return ({
        count: state.count - 1,
        log: [ action.type, ...log ]
      });

    case 'INC_ALL':
      return ({
        count: state.count + 1,
        log: [ action.type, ...log ]
      });

    // default is logging every action.type into the start of an array
    default: 
      return ({
        count,
        log: [ action.type, ...log ]
      });
  }
};


export default combineReducers({
  A: reducer_A,
  B: reducer_B,
  global: reducer_global
});