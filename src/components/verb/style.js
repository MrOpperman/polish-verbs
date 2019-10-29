import styled from 'styled-components';
import { breakpoints, pxtorem, colors } from 'styles';

export const VerbCard = styled.div`
  width: 100%;
  cursor: pointer;
  padding: 20px;
  border-radius: 4px;
  background-color: #ffffff;
  box-shadow: 0 9px 12px 0 rgba(7, 0, 37, 0.07),
    0 2px 4px 0 rgba(7, 0, 37, 0.06);
  flex: 1 auto;
  @media (max-width: ${pxtorem(breakpoints.small)}) {
    margin-right: 0;
    width: 100%;
  }
`;

export const VerbName = styled.div`
  color: #51516f;
  font-size: 30px;
  font-weight: 600;
  text-align: left;
  padding-bottom: 8px;
`;

export const TenseHeading = styled.div`
  font-size: 16px;
  margin-bottom: 8px;
  color: #6d6d90;
  font-weight: 600;
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
  height: 20px;
`;

export const ConjugatedHeader = styled.div`
  color: #ff6a70;
  font-size: 16px;
  font-weight: 600;
  padding-right: 8px;
  text-transform: capitalize;
`;

export const ConjugatedData = styled.div`
  color: #4db3bf;
  font-size: 16px;
  font-weight: 600;
  padding-right: 16px;
`;

export const ShowMoreButton = styled.button`
  display: block;
  cursor: pointer;
  width: fit-content;
  height: 24px;
  text-align: center;
  border: none;
  border-radius: 4px;
  color: ${colors.storm};
  background-color: ${colors.white};
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 0;
`;
