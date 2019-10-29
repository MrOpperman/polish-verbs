import styled from 'styled-components';
import { DebounceInput } from 'react-debounce-input';
import { ReactComponent as AlgoliaSVG } from 'assets/algolia.svg';

export const SearchInput = styled(DebounceInput)`
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
  margin-right: 2px;
  width: 39px;
  margin-top: -73px;
`;
