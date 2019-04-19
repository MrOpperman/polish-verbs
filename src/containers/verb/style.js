import styled from 'styled-components';
import { colors } from 'styles';

export const ExamplesContainer = styled.div`
  padding: 20px;
  width: 100%;
  border-radius: 4px;
  background-color: #ffffff;
  box-shadow: 0 9px 12px 0 rgba(7, 0, 37, 0.07),
    0 2px 4px 0 rgba(7, 0, 37, 0.06);
  margin-bottom: 20px;
`;

export const ConjugatedTable = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 20px;
  width: 100%;
  border-radius: 4px;
  background-color: #ffffff;
  box-shadow: 0 9px 12px 0 rgba(7, 0, 37, 0.07),
    0 2px 4px 0 rgba(7, 0, 37, 0.06);
  margin-bottom: 16px;

  > div {
    display: flex;
  }
`;

export const VerbHeading = styled.h1`
  color: ${colors.storm};
  text-align: center;
`;

export const VerbDescription = styled.h4`
  font-weight: 400;
  color: ${colors.storm};
  font-style: italic;
  text-align: center;
`;

export const ExampleForm = styled.h3`
  color: ${colors.storm};
  font-size: 16px;
  font-weight: bold;
`;

export const Example = styled.div`
  display: flex;
  color: #4db3bf;
  font-size: 14px;
  font-weight: 600;
  padding-right: 8px;
`;

export const Translation = styled.span`
  color: #a9a9bb;
  font-size: 14px;
  padding-left: 4px;
`;

export const NoExamples = styled.div`
  display: flex;
  justify-content: center;
  color: #a9a9bb;
  font-size: 16px;
`;
