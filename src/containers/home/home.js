import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import Verbs from 'components/verbs';

const Home = ({ history }) => (
  <div>
    <Helmet title='conjugate.pl' />
    <Verbs history={history} />
  </div>
);

Home.propTypes = {
  history: PropTypes.object
};

export default Home;
