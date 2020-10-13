import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { removeBook } from "../actions/index";

const Book = (props) => {
  const { book, deleteBook } = props;

  const handleClick = () => {
    deleteBook(book);
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
      </div>
      <button type="button" onClick={handleClick}>
        <span className="material-icons">delete</span>
      </button>
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
