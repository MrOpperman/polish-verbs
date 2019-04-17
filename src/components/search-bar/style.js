import styled from 'styled-components';
import { ReactComponent as AlgoliaSVG } from 'assets/algolia.svg';

export const SearchInput = styled.input`
  display: flex;
  width: 100%;
  height: 43px;
  margin-bottom: 32px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(209, 209, 232);
  border-image: initial;
  border-radius: 4px;
  font-size: 15px;
  padding: 10px;
  margin-top: 24px;
`;

export const AlgoliaLogo = styled(AlgoliaSVG)`
  float: right;
  top: 96px;
  right: 18px;
  width: 39px;
  position: absolute;
`;
