import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { removeBook } from "../actions/index";

const Book = (props) => {
  const { book, deleteBook } = props;

  const handleClick = () => {
    deleteBook(book);
  };

  const handleKeyDown = e => {
    if (e.keyCode === 13) {
      deleteBook(book);
    }
  };

  return (
    <div className="Lesson-Panel">
      <div className="Book-Details">
        <span className="School-of">
          { book.category }
        </span>
        <h3 className="title">
          { book.title }
        </h3>
        <span className="Suzanne-Collins">
          Suzanne Collins
        </span>
        <div className="book-actions">
          <span className="book-action">Comments</span>
          <span className="book-action" onClick={handleClick} onKeyDown={handleKeyDown} role="button" tabIndex="0">Remove</span>
          <span className="book-action">Edit</span>
        </div>
      </div>
      <div className="Book-Stats">
        <div className="Completed">
          <div className="Rectangle-3">
            <div className="Oval-2" />
          </div>
        </div>
        <div className="current-chapter">

        </div>
      </div>
    </div>

  );
};

Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.string).isRequired,
  deleteBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  deleteBook: (book) => {
    dispatch(removeBook(book));
  },
});

const ConnectedBook = connect(null, mapDispatchToProps)(Book);

export default ConnectedBook;
