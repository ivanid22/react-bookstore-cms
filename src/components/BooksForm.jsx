import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook, createBookAsync } from '../actions/index';
import CATEGORIES from '../constants/constants';

const renderCategories = () => (
  CATEGORIES.map(category => (
    <option key={`${category}-key`} value={category}>
      {category}
    </option>
  ))
);

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: CATEGORIES[0],
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    const { title, category } = this.state;
    const { createBook } = this.props;
    createBook({ title, category });
  }

  handleNameChange(event) {
    this.setState({
      title: event.target.value,
    });
  }

  handleCategoryChange(event) {
    this.setState({
      category: event.target.value,
    });
  }

  render() {
    const { category, title } = this.state;
    return (
      <form onSubmit={this.onSubmit} className="Book-form">
        <p className="Book-form-title">Add new Book</p>
        <div className="Book-form-input-container">
          <input className="Book-form-title-input" type="text" id="bookName" value={title} onChange={this.handleNameChange} required placeholder="Book title" />
          <select className="Book-form-category-input" id="bookCategory" value={category} onChange={this.handleCategoryChange} required>
            { renderCategories() }
          </select>
          <input className="Book-form-submit" type="submit" value="Add book" />
        </div>
      </form>
    );
  }
}

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  createBook: bookData => {
    dispatch(createBookAsync(bookData));
  },
});

const ConnectedBooksForm = connect(null, mapDispatchToProps)(BooksForm);

export default ConnectedBooksForm;
