import axios from 'axios';
import { v4 as generateId } from 'uuid';
import { API_URL } from '../constants/constants';

export const createBook = ({ category, title }) => ({
  type: 'CREATE_BOOK',
  book: {
    category,
    title,
    id: generateId(),
  },
});

const setBooks = (books) => ({
  type: 'SET_BOOKS',
  books,
});

export const removeBook = book => ({
  type: 'REMOVE_BOOK',
  book,
});

export const filter = label => ({
  type: 'CHANGE_FILTER',
  label,
});

export const fetchBooksAsync = () => {
  return dispatch => {
    axios({
      method: 'GET',
      url: `${API_URL}/books`,
      headers: {
        Accept: 'application/json'
      },
    }).then(response => {
      console.log(response.data);
      dispatch(setBooks(response.data));
    }).catch(error => {
      dispatch(filter('Kids'));
    });
  };
};

export const createBookAsync = ({ category, title }) => (dispatch => {
  axios({
    method: 'POST',
    url: `${API_URL}/books`,
    headers: {
      Accept: 'application/json',
    },
    data: {
      category,
      title,
    },
  }).then(() => {
    dispatch(createBook({ category, title }));
  }).catch(error => {
    console.log(error.message);
  });
});
