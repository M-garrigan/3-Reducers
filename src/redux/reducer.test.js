
import root, {
  reducer_A,
  reducer_B,
  reducer_global 
} from './reducer.js';

describe('reducer_A', () => {

  it('should return the initial state', () => {
    expect(reducer_A(undefined, {})).toEqual({ count: 0 })
  });

  it('should handle "INC_A" and return the correct state', () => {
    expect(reducer_A(undefined, {type: 'INC_A'})).toEqual({ count: 1 })
  });

  it('should handle "DEC_A" and return the correct state', () => {
    expect(reducer_A(undefined, {type: 'DEC_A'})).toEqual({ count: -1 })
  });

  it('should handle "INC_ALL" and return the correct state', () => {
    expect(reducer_A(undefined, {type: 'INC_ALL'})).toEqual({ count: 1 })
  });

  it('should handle "DEC_ALL" and return the correct state', () => {
    expect(reducer_A(undefined, {type: 'DEC_ALL'})).toEqual({ count: -1 })
  });

});

describe('reducer_B', () => {
  
  it('should return the initial state', () => {
    expect(reducer_B(undefined, {})).toEqual({ count: 0 })
  });

  it('should handle "INC_B" and return the correct state', () => {
    expect(reducer_B(undefined, {type: 'INC_B'})).toEqual({ count: 1 })
  });

  it('should handle "DEC_B" and return the correct state', () => {
    expect(reducer_B(undefined, {type: 'DEC_B'})).toEqual({ count: -1 })
  });

  it('should handle "INC_ALL" and return the correct state', () => {
    expect(reducer_B(undefined, {type: 'INC_ALL'})).toEqual({ count: 1 })
  });

  it('should handle "DEC_ALL" and return the correct state', () => {
    expect(reducer_B(undefined, {type: 'DEC_ALL'})).toEqual({ count: -1 })
  });

});

describe('reducer_global', () => {
  
  it('should return the initial state', () => {
    expect(reducer_global(undefined, {})).toEqual({ count: 0, log: [undefined] })
  });

  it('should handle "INC_ALL" and return the correct state', () => {
    expect(reducer_global(undefined, {type: 'INC_ALL'})).toEqual({ count: 1, log: ['INC_ALL'] })
  });

  it('should handle "DEC_ALL" and return the correct state', () => {
    expect(reducer_global(undefined, {type: 'DEC_ALL'})).toEqual({ count: -1, log: ['DEC_ALL'] })
  });

});

describe('Combined Root Reducer', () => {

  it('should return the initial state', () => {
    expect(root(undefined, {})).toEqual(
      { 
        A: { count: 0 },
        B: { count: 0 },
        global: {
          count: 0,
          log: [undefined]
        }
      }
    )
  });

  it('should handle "INC_A" and return the correct state', () => {
    expect(root(undefined, {type: 'INC_A'})).toEqual(
      { 
        A: { count: 1 },
        B: { count: 0 },
        global: {
          count: 0,
          log: ['INC_A']
        }
      }
    )
  });

  it('should handle "DEC_A" and return the correct state', () => {
    expect(root(undefined, {type: 'DEC_A'})).toEqual(
      { 
        A: { count: -1 },
        B: { count: 0 },
        global: {
          count: 0,
          log: ['DEC_A']
        }
      }
    )
  });

  it('should handle "INC_B" and return the correct state', () => {
    expect(root(undefined, {type: 'INC_B'})).toEqual(
      { 
        A: { count: 0 },
        B: { count: 1 },
        global: {
          count: 0,
          log: ['INC_B']
        }
      }
    )
  });

  it('should handle "DEC_B" and return the correct state', () => {
    expect(root(undefined, {type: 'DEC_B'})).toEqual(
      { 
        A: { count: 0 },
        B: { count: -1 },
        global: {
          count: 0,
          log: ['DEC_B']
        }
      }
    )
  });

  it('should handle "INC_ALL" and return the correct state', () => {
    expect(root(undefined, {type: 'INC_ALL'})).toEqual(
      { 
        A: { count: 1 },
        B: { count: 1 },
        global: {
          count: 1,
          log: ['INC_ALL']
        }
      }
    )
  });

  it('should handle "DEC_ALL" and return the correct state', () => {
    expect(root(undefined, {type: 'DEC_ALL'})).toEqual(
      { 
        A: { count: -1 },
        B: { count: -1 },
        global: {
          count: -1,
          log: ['DEC_ALL']
        }
      }
    )
  });

});