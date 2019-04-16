import React from 'react';
import PropTypes from 'prop-types';
import {
  VerbCard,
  VerbName,
  VerbDescription,
  ConjugatedArea,
  ConjugatedData,
  ConjugatedHeader
} from './style';

const Verb = ({ verb }) => (
  <VerbCard>
    <VerbName>
      {verb.verb} - {verb.english}
    </VerbName>
    <VerbDescription>{verb.description}</VerbDescription>

    <ConjugatedArea>
      <ConjugatedHeader>Ja: </ConjugatedHeader>
      <ConjugatedData>{verb.ja}</ConjugatedData>
    </ConjugatedArea>

    <ConjugatedArea>
      <ConjugatedHeader>Ty: </ConjugatedHeader>
      <ConjugatedData>{verb.ty}</ConjugatedData>
    </ConjugatedArea>

    <ConjugatedArea>
      <ConjugatedHeader>On/Ona/Ono: </ConjugatedHeader>
      <ConjugatedData>{verb.on}</ConjugatedData>
    </ConjugatedArea>

    <ConjugatedArea>
      <ConjugatedHeader>My: </ConjugatedHeader>
      <ConjugatedData>{verb.my}</ConjugatedData>
    </ConjugatedArea>

    <ConjugatedArea>
      <ConjugatedHeader>Wy: </ConjugatedHeader>
      <ConjugatedData>{verb.wy}</ConjugatedData>
    </ConjugatedArea>

    <ConjugatedArea>
      <ConjugatedHeader>Oni/One: </ConjugatedHeader>
      <ConjugatedData>{verb.oni}</ConjugatedData>
    </ConjugatedArea>
  </VerbCard>
);

Verb.propTypes = {
  verb: PropTypes.object
};

export default Verb;
