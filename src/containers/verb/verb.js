import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import queryString from 'query-string';
import algolia from 'utils/algolia';

import {
  ExamplesContainer,
  ConjugatedTable,
  VerbHeading,
  VerbDescription,
  ExampleForm,
  Example,
  Translation,
  NoExamples
} from './style';

import { ConjugatedData, ConjugatedHeader } from 'components/verb/style';

const getVerb = (query, setVerb) => {
  algolia.search({ query }).then(res => setVerb(res.hits[0]));
};

const renderExamples = examples => {
  if (!examples) return;

  const renderedExamples = [];
  let previousForm = '';

  examples.forEach(({ conjunction, english, example }, i) => {
    if (!previousForm || previousForm !== conjunction) {
      renderedExamples.push(
        <ExampleForm key={i + conjunction}>{conjunction}</ExampleForm>
      );
      previousForm = conjunction;
    }

    renderedExamples.push(
      <Example key={i}>
        {example} <Translation>- {english}</Translation>
      </Example>
    );
  });

  return renderedExamples;
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

      {/* make component pls */}
      <ConjugatedTable>
        <ConjugatedHeader>Ja: </ConjugatedHeader>
        <ConjugatedData>{verb.ja}</ConjugatedData>
        <ConjugatedHeader>Ty: </ConjugatedHeader>
        <ConjugatedData>{verb.ty}</ConjugatedData>
        <ConjugatedHeader>On/Ona/Ono: </ConjugatedHeader>
        <ConjugatedData>{verb.on}</ConjugatedData>
        <ConjugatedHeader>My: </ConjugatedHeader>
        <ConjugatedData>{verb.my}</ConjugatedData>
        <ConjugatedHeader>Wy: </ConjugatedHeader>
        <ConjugatedData>{verb.wy}</ConjugatedData>
        <ConjugatedHeader>Oni/One: </ConjugatedHeader>
        <ConjugatedData>{verb.oni}</ConjugatedData>
      </ConjugatedTable>

      <ExamplesContainer>
        {renderExamples(verb.examples)}
        {!verb.examples && <NoExamples>No examples yet :(</NoExamples>}
      </ExamplesContainer>
    </div>
  );
};

Verb.propTypes = {
  history: PropTypes.object
};

export default Verb;
