import React from 'react';
import PropTypes from 'prop-types';
import { colors } from 'styles';
import {
  VerbCard,
  VerbName,
  VerbDescription,
  ConjugatedArea,
  ConjugatedData,
  ConjugatedHeader,
  ButtonContainer,
  ShowMoreButton
} from './style';
import { KeyboardArrowRight } from 'styled-icons/material';

const Verb = ({ verb, history }) => (
  <VerbCard>
    <VerbName>
      {verb.verb} - {verb.english}
    </VerbName>
    {verb.perfective && !verb.imperfective && (
      <VerbDescription>
        <b>Perfective</b>: {verb.perfective}
      </VerbDescription>
    )}

    {verb.frequentative && (
      <VerbDescription>
        <b>Frequentative</b>: {verb.frequentative}
      </VerbDescription>
    )}

    {verb.imperfective && (
      <VerbDescription>
        <b>Imperfective</b>: {verb.imperfective}
      </VerbDescription>
    )}

    {!verb.frequentative && !verb.perfective && !verb.imperfective && (
      <VerbDescription>
        <b>Perfective</b>: N/A
      </VerbDescription>
    )}

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

    {history && (
      <ButtonContainer>
        <ShowMoreButton onClick={() => history.push(`/verb?name=${verb.verb}`)}>
          More <KeyboardArrowRight color={colors.red} height='16px' />
        </ShowMoreButton>
      </ButtonContainer>
    )}
  </VerbCard>
);

Verb.propTypes = {
  verb: PropTypes.object.isRequired,
  history: PropTypes.object
};

export default Verb;
