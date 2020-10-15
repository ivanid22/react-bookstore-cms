import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import filterBooks from '../filters/booksFilter';
import { filter } from '../actions/index';
import CATEGORIES from '../constants/constants';

const FILTEROPTIONS = ['All', ...CATEGORIES];

const BookList = ({ bookList, filter }) => {
  const renderBooks = () => bookList.map(book => (
    <Book key={book.id} book={book} />
  ));

  const handleFilterChange = event => filter(event.target.value);

  return (
    <div className="BookList-Container">
      {renderBooks()}
      <CategoryFilter filterOptions={FILTEROPTIONS} />
    </div>
  );
};

BookList.propTypes = {
  bookList: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.func.isRequired,
};

const mapStateToProps = state => (
  {
    bookList: filterBooks(state.books, state.filter),
  }
);

const mapDispatchToProps = {
  filter,
};

const connectedBookList = connect(mapStateToProps, mapDispatchToProps)(BookList);

export default connectedBookList;
