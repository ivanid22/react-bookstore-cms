import React from 'react';
import BookList from '../containers/BookList';
import BookForm from './BooksForm';

const App = () => (
  <div>
    <BookForm />
    <BookList />
  </div>
);

export default App;
