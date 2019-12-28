
import root, {
  reducer_A,
  reducer_B,
  reducer_global 
} from './reducer.js';

describe('reducer_A', () => {
  it('should return the initial state', () => {
    expect(reducer_A(undefined, {})).toEqual({ count: 0 })
  });

});