import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import queryString from 'query-string';

import { VerbHeading, VerbDescription } from './style';

import algolia from 'utils/algolia';

const getVerb = (query, setVerb) => {
  algolia.search({ query }).then(res => setVerb(res.hits[0]));
};

const Verb = ({ history }) => {
  const [verb, setVerb] = useState({});

  useEffect(() => {
    const searchValues = queryString.parse(history.location.search);
    const verbName = searchValues.name;
    getVerb(verbName, setVerb);
  }, []);

  return (
    <div>
      <Helmet title={`conjugate.pl - ${verb.verb}`} />
      <VerbHeading>{verb.verb}</VerbHeading>
      <VerbDescription>{verb.description}</VerbDescription>
    </div>
  );
};

Verb.propTypes = {
  history: PropTypes.object
};

export default Verb;
