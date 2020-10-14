import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions/index';
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
      <form onSubmit={this.onSubmit}>
        <label htmlFor="bookName">
          Book name
          <input type="text" id="bookName" value={title} onChange={this.handleNameChange} required />
        </label>
        <label htmlFor="bookCategory">
          Book category
          <select id="bookCategory" value={category} onChange={this.handleCategoryChange} required>
            { renderCategories() }
          </select>
        </label>
        <input type="submit" />
      </form>
    );
  }
}

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  createBook: bookData => {
    dispatch(createBook(bookData));
  },
});

const ConnectedBooksForm = connect(null, mapDispatchToProps)(BooksForm);

export default ConnectedBooksForm;
