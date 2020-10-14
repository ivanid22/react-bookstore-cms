import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import filterBooks from '../filters/booksFilter';

const FILTEROPTIONS = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const BookList = props => {
  const { bookList } = props;

  const renderBooks = () => bookList.map(book => (
    <Book key={book.id} book={book} />
  ));

  return (
    <div className="BookList-Container">
      {renderBooks()}
      <CategoryFilter filterOptions={FILTEROPTIONS} />
    </div>
  );
};

BookList.propTypes = {
  bookList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => (
  {
    bookList: filterBooks(state.books, state.filter),
  }
);

const connectedBookList = connect(mapStateToProps)(BookList);

export default connectedBookList;
