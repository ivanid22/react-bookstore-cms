import React from 'react';
import BookList from '../containers/BookList';
import BookForm from './BooksForm';

const App = () => (
  <div className="Bookstore-CMS">
    <div className="panel-bg">
      <BookList />
      <BookForm />
    </div>
  </div>
);

export default App;
