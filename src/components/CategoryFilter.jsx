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
      <select id="filter" onChange={handleFilterChange}>
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
