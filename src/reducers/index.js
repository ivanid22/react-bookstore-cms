import { combineReducers } from 'redux';
import booksReducer from './books';
import filter from './filter';

const combinedReducers = combineReducers({
  books: booksReducer,
  filter,
});

export default combinedReducers;
