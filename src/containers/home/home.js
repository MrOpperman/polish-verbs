import React from 'react';
import { Helmet } from 'react-helmet';
import { Heading, Paragraph } from './style';
import Verbs from 'components/verbs';

const Home = () => (
  <div>
    <Helmet title='Polish Verb Conjugations' />
    <Heading>Conjugate!</Heading>
    <Paragraph>
      Conjugated verbs are verbs which have been changed to communicate one or
      more of the following: person, number, gender, tense, aspect, mood, or
      voice.
    </Paragraph>
    <Verbs />
  </div>
);

export default Home;
