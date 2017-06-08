import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch   } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import todoApp from '../reducers';
import App from './components/App';

let store = createStore(todoApp);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)