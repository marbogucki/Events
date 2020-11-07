import React from 'react';
import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import { MenuIconStyled, TypographyStyled } from './Header.styled';
import { HeaderProps } from './Header.model';

const Header = ({ title, handleNav }: HeaderProps) => {
  const handleToggleNav = () => handleNav();

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleToggleNav}
        >
          <MenuIconStyled />
        </IconButton>
        <TypographyStyled variant="h3">{title}</TypographyStyled>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
