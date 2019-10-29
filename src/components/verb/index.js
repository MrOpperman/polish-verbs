import React from 'react';
import PropTypes from 'prop-types';
// import { colors } from 'styles';
import {
  VerbCard,
  VerbName,
  TenseHeading,
  ConjugatedArea,
  ConjugatedData,
  ConjugatedHeader
  // ButtonContainer,
  // ShowMoreButton
} from './style';
// import { KeyboardArrowRight } from 'styled-icons/material';

const Verb = ({ verb, history }) => {
  // fucked up my data, yolo
  verb.data[0].pronoun = 'ja';
  verb.data.splice(1, 0, verb.data.pop());
  verb.data[1].pronoun = 'ty';

  return (
    <VerbCard onClick={() => history.push(`/verb?name=${verb.verb}`)}>
      <VerbName>
        {verb.englishTitle} - {verb.title}
      </VerbName>
      <TenseHeading>{verb.data[0].tense}</TenseHeading>

      {verb.data.map((data, i) => (
        <ConjugatedArea key={i}>
          <ConjugatedHeader>{data.pronoun}: </ConjugatedHeader>
          <ConjugatedData>
            {data.polish} - {data.english}
          </ConjugatedData>
        </ConjugatedArea>
      ))}

      {/* {history && ( */}
      {/*  <ButtonContainer> */}
      {/*    <ShowMoreButton> */}
      {/*      More <KeyboardArrowRight color={colors.red} height='16px' /> */}
      {/*    </ShowMoreButton> */}
      {/*  </ButtonContainer> */}
      {/* )} */}
    </VerbCard>
  );
};

Verb.propTypes = {
  verb: PropTypes.object.isRequired,
  history: PropTypes.object
};

export default Verb;
