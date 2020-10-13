import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';

const FILTEROPTIONS = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const BookList = props => {
  const { bookList } = props;

  const renderBooks = () => bookList.map(book => (
    <Book key={book.id} book={book} />
  ));

  return (
    <div>
      <CategoryFilter filterOptions={FILTEROPTIONS} />
      <table>
        <thead>
          <tr>
            <th>Book Id</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {renderBooks()}
        </tbody>
      </table>
    </div>
  );
};

BookList.propTypes = {
  bookList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => (
  {
    bookList: state.books,
  }
);

const connectedBookList = connect(mapStateToProps)(BookList);

export default connectedBookList;
