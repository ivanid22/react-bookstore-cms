import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = ({ filterOptions, handleFilterChange }) => {
  const optionList = () => (
    filterOptions.map(option => (
      <option key={`${option}-key`} value={option}>{option}</option>
    ))
  );

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

export default CategoryFilter;
