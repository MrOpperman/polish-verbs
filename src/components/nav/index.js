import React from 'react';

// components
import { StyledNav, StyledLink, StyledIcon } from './styled';

const Nav = () => (
  <StyledNav>
    <StyledIcon />
    <StyledLink to='/'>conjugate.pl</StyledLink>
  </StyledNav>
);

export default Nav;
