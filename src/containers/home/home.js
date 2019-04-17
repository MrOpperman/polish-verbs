import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import Verbs from 'components/verbs';

const Home = ({ history }) => (
  <div>
    <Helmet>
      <title>conjugate.pl</title>
      <meta
        name='description'
        content='Welcome to conjugate.pl, this is a very simple app with its main focus
      on searching for similar words and an easy to use interface that is
      responsive to mobile'
      />
    </Helmet>
    <Verbs history={history} />
  </div>
);

Home.propTypes = {
  history: PropTypes.object
};

export default Home;
