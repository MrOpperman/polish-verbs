import styled from 'styled-components';
import { breakpoints, pxtorem } from 'styles';

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
