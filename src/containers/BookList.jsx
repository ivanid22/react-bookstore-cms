import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';

const BookList = props => {
  const { bookList } = props;

  const renderBooks = () => {
    bookList.map(book => (
      <Book key={book.id} book={book} />
    ));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Book Id</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {renderBooks}
      </tbody>
    </table>
  );
};

BookList.propTypes = {
  bookList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => (
  {
    bookList: state,
  }
);

const connectedBookList = connect(mapStateToProps)(BookList);

export default connectedBookList;
