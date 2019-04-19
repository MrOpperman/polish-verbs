import React, { useState } from 'react';
import PropTypes from 'prop-types';
import algolia from 'utils/algolia';

import { VerbsContainer } from './style';

import Verb from 'components/verb';
import SearchBar from 'components/search-bar';

const getVerbs = (verbs, setVerbs, query) =>
  algolia.search({ query, hitsPerPage: 50 }).then(res => setVerbs(res.hits));

const renderVerbs = (verbs, history) => {
  const verbCollection = [];

  verbs.forEach((verb, i) => {
    verbCollection.push(<Verb verb={verb} history={history} key={i} />);
  });

  return verbCollection;
};

const Verbs = ({ history }) => {
  const [loading, setLoading] = useState(true);
  const [verbs, setVerbs] = useState([]);
  const [query, updateQuery] = useState('');
  const [fetching, updateFetch] = useState(true);

  if (fetching)
    getVerbs(verbs, setVerbs, query).then(() => {
      setLoading(false);
      updateFetch(false);
    });

  return (
    <>
      <SearchBar updateQuery={updateQuery} updateFetch={updateFetch} />
      {loading && <div>Loading...</div>}
      {!loading && (
        <VerbsContainer>{renderVerbs(verbs, history)}</VerbsContainer>
      )}
    </>
  );
};

Verbs.propTypes = {
  history: PropTypes.object
};

export default Verbs;
