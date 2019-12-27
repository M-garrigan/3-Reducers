
import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import reducer from './redux/reducer.js';
import { Provider } from 'react-redux';
import App from './components/App.js';

const store = createStore(reducer);

ReactDOM.render( 
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);