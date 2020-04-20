import React from 'react';
import { NavContainerDiv, StyledNav, StyledNavItem } from './NavMenuStyles';

export default function NavMenu() {
  return (
    <NavContainerDiv>
      <StyledNav>
        <StyledNavItem>navlink 1</StyledNavItem>
        <StyledNavItem>navlink 2</StyledNavItem>
      </StyledNav>
    </NavContainerDiv>
  )
}
