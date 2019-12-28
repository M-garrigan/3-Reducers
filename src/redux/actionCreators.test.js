
import {
  decCount,
  incCount,
  decCountAll,
  incCountAll
} from './actionCreators.js';

describe('Action Creator: ', () => {
  it('decCount should create this action', () => {
    const name = 'A';
    const expectedAction = {
      type: 'DEC_A'
    };
    expect(decCount('A')).toEqual(expectedAction);
  });

  it('incCount should create this action', () => {
    const name = 'A';
    const expectedAction = {
      type: 'INC_A'
    };
    expect(incCount('A')).toEqual(expectedAction);
  });

  it('decCountAll should create this action', () => {
    const expectedAction = {
      type: 'DEC_ALL'
    };
    expect(decCountAll()).toEqual(expectedAction);
  });

  it('incCountAll should create this action', () => {
    const expectedAction = {
      type: 'INC_ALL'
    };
    expect(incCountAll()).toEqual(expectedAction);
  });
});