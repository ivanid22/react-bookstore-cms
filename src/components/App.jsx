import React from 'react';
import BookList from '../containers/BookList';
import BookForm from './BooksForm';
import NavBar from './NavBar';

const App = () => (
  <div className="Bookstore-CMS">
    <div className="panel-bg">
      <NavBar />
      <BookList />
      <BookForm />
    </div>
  </div>
);

export default App;
