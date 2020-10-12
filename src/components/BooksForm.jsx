import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions/index';

const CATEGORIES = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

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
  }

  onSubmit() {
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
      <form onSubmit={this.submitBook}>
        <label htmlFor="bookName">Book name</label>
        <input type='text' id='bookName' value={title} onChange={this.handleNameChange} required />
        <select id="bookCategoryId" name="bookCategory" value={category} onSelect={this.handleCategoryChange} required>
          { renderCategories() }
        </select>
        <label htmlFor="bookCategory">Book category</label>
        <input type="submit" />
      </form>
    );
  }
}

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  addBook: bookData => {
    dispatch(createBook(bookData));
  },
});

const connectedBooksForm = connect(null, mapDispatchToProps)(BooksForm);

export default connectedBooksForm;
