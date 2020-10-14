import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './components/App';
import combinedReducers from './reducers/index';
import './reset.css';
import './index.css';

const initialState = [
  {
    title: 'Operating Systems',
    category: 'Learning',
    id: Math.floor((Math.random() * 100)).toString(),
  },
  {
    title: 'The hunger games',
    category: 'Sci-Fi',
    id: Math.floor((Math.random() * 100)).toString(),
  },
];

const store = createStore(combinedReducers, {
  books: initialState,
  filter: 'All',
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
