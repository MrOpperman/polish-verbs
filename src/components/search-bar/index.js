import React from 'react';
import PropTypes from 'prop-types';
import { SearchInput, AlgoliaLogo } from './style';

const SearchBar = ({ updateQuery, updateFetch }) => (
  <>
    <SearchInput
      minLength={2}
      debounceTimeout={400}
      placeholder='Search...'
      onChange={e => {
        updateQuery(e.target.value);
        updateFetch(true);
      }}
    />
    <AlgoliaLogo />
  </>
);

SearchBar.propTypes = {
  updateQuery: PropTypes.func,
  updateFetch: PropTypes.func
};

export default SearchBar;
