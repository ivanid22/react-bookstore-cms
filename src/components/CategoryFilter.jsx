import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filter } from '../actions/index';

const CategoryFilter = props => {
  const { filterOptions, handleFilterChange } = props;

  const optionList = () => (
    filterOptions.map(option => (
      <option key={`${option}-key`} value={option}>{option}</option>
    ))
  );

  const handleEventFilterChange = event => {
    handleFilterChange(event.target.value);
  };

  return (
    <label htmlFor="filter" className="filter-style">
      Filter:
      <select id="filter" className="Book-form-category-input" onChange={handleEventFilterChange}>
        {optionList()}
      </select>
    </label>
  );
};

CategoryFilter.propTypes = {
  filterOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  handleFilterChange: label => {
    dispatch(filter(label));
  },
});

const ConnectedCategoryFilter = connect(null, mapDispatchToProps)(CategoryFilter);

export default ConnectedCategoryFilter;
