
export const decCount = name => ({ type: `DEC_${name}` });

export const incCount = name => ({ type: `INC_${name}` });

export const decCountAll = () => ({ type: 'DEC_ALL' });

export const incCountAll = () => ({ type: 'INC_ALL' });