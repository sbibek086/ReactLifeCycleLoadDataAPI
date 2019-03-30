import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Thunk from 'redux-thunk'
import App from './components/App';
import reducers from './reducers';

const store = applyMiddleware(Thunk)(createStore);

ReactDOM.render(
  <Provider store={store(reducers)}>
    <App />
  </Provider>
  , document.querySelector('#root'));