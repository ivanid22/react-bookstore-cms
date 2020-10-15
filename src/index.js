import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import ReactDOM from 'react-dom';
import App from './components/App';
import combinedReducers from './reducers/index';
import { createBookAsync, fetchBooksAsync } from './actions/index';
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
  books: [],
  filter: 'All',
}, applyMiddleware(thunk));

store.subscribe(() => {
  console.log('state updated', store.getState());
})

store.dispatch(fetchBooksAsync());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
