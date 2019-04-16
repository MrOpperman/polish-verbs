import styled from 'styled-components';
import Link from 'react-router-dom/Link';
import { colors, pxtorem } from 'styles';

// svg
import { ReactComponent as BookSVG } from 'components/nav/book.svg';

export const StyledNav = styled.div`
  height: ${pxtorem(70)};
  border-bottom: ${pxtorem(4)} ${colors.red} solid;
  background-color: ${colors.white};
  padding: 0 1rem;
  display: flex;
  align-items: center;
  color: ${colors.red};
  font-size: ${pxtorem(20)};
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const StyledIcon = styled(BookSVG)`
  fill: ${colors.red};
  margin-right: 1rem;
`;
