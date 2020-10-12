import { combineReducers } from 'redux';
import booksReducer from './books';

const combinedReducers = combineReducers({
  books: booksReducer,
});

export default combinedReducers;
