import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeBook } from '../actions/index';

const Book = props => {
  const { book, deleteBook } = props;

  const handleClick = () => {
    deleteBook(book);
  };

  return (
    <tr>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.category}</td>
      <td>
        <button type="button" onClick={handleClick}>
          <span className="material-icons">
            delete
          </span>
        </button>
      </td>
    </tr>
  );
};

Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.string).isRequired,
  deleteBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  deleteBook: book => {
    dispatch(removeBook(book));
  },
});

const ConnectedBook = connect(null, mapDispatchToProps)(Book);

export default ConnectedBook;
