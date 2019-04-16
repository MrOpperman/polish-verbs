import React from 'react';
import PropTypes from 'prop-types';
import { SearchInput } from './style';

const SearchBar = ({ updateQuery, updateFetch }) => (
  <SearchInput
    placeholder='Search...'
    onChange={e => {
      updateQuery(e.currentTarget.value);
      updateFetch(true);
    }}
  />
);

SearchBar.propTypes = {
  updateQuery: PropTypes.func,
  updateFetch: PropTypes.func
};

export default SearchBar;
