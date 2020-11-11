import React from 'react';
import {
  NavigationItem,
  NavigationList,
  NavigationStyled,
  NavLinkStyled,
} from './Navigation.style';

export const Navigation = () => (
  <NavigationStyled>
    <NavigationList>
      <NavigationItem>
        <NavLinkStyled to="/events" activeClassName="active">
          Events
        </NavLinkStyled>
      </NavigationItem>
      <NavigationItem>
        <NavLinkStyled to="/about" activeClassName="active">
          About
        </NavLinkStyled>
      </NavigationItem>
      <NavigationItem>
        <NavLinkStyled to="/concerts" activeClassName="active">
          Concerts
        </NavLinkStyled>
      </NavigationItem>
    </NavigationList>
  </NavigationStyled>
);
