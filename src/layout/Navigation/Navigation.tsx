import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavigationStyled } from './Navigation.style';

export const Navigation = () => {
  return (
    <NavigationStyled>
      <NavLink to="/">Events</NavLink>
      <NavLink to="/about">About</NavLink>
    </NavigationStyled>
  );
};
