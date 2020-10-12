import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './components/App';
import combinedReducers from './reducers/index';

const initialState = [
  {
    title: 'Operating Systems',
    category: 'Learning',
    id: Math.random(),
  },
  {
    title: 'The hunger games',
    category: 'Sci-Fi',
    id: Math.random(),
  },
];

const store = createStore(combinedReducers, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
