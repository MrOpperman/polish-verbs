import styled from 'styled-components';
import { breakpoints, colors, pxtorem } from 'styles';

export const VerbsContainer = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: ${pxtorem(breakpoints.medium)}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${pxtorem(breakpoints.small)}) {
    grid-template-columns: 1fr;
  }
`;

export const Paragraph = styled.h3`
  color: ${colors.storm};
  padding-bottom: 16px;
  font-weight: 400;
`;
