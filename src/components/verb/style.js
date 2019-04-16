import styled from 'styled-components';
import { breakpoints, pxtorem } from 'styles';

export const VerbCard = styled.div`
  width: 400px;
  padding: 20px;
  border-radius: 4px;
  background-color: #ffffff;
  box-shadow: 0 9px 12px 0 rgba(7, 0, 37, 0.07),
    0 2px 4px 0 rgba(7, 0, 37, 0.06);
  margin-bottom: 16px;
  flex: 1 1 auto;
  @media (max-width: ${pxtorem(breakpoints.small)}) {
    margin-right: 0;
    width: 100%;
  }
`;

export const VerbName = styled.div`
  color: #51516f;
  font-size: 30px;
  font-weight: 600;
  text-align: center;
`;

export const VerbDescription = styled.div`
  font-size: 16px;
  font-style: italic;
  text-align: center;
  padding-bottom: 8px;
  color: #6d6d90;
`;

export const ConjugatedArea = styled.div`
  display: flex;
`;

export const ConjugatedHeader = styled.div`
  color: #4db3bf;
  font-size: 14px;
  font-weight: 600;
  padding-right: 8px;
`;

export const ConjugatedData = styled.div`
  color: #a9a9bb;
  font-size: 14px;
`;
