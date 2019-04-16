import React, { useState } from 'react';
import algolia from 'utils/algolia';

import { VerbsContainer } from './style';

import Verb from 'components/verb';
import SearchBar from 'components/search-bar';

const getVerbs = (verbs, setVerbs, query) =>
  algolia.search({ query }).then(res => setVerbs(res.hits));

const renderVerbs = verbs => {
  const verbCollection = [];

  verbs.forEach((verb, i) => {
    verbCollection.push(<Verb verb={verb} key={i} />);
  });

  return verbCollection;
};

const Verbs = () => {
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
      {!loading && <VerbsContainer>{renderVerbs(verbs)}</VerbsContainer>}
    </>
  );
};

export default Verbs;
