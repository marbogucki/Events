import React, { useContext } from 'react';
import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import { MenuIconStyled, TypographyStyled } from './Header.styled';
import { HeaderProps } from './Header.model';
import { HeaderTitleContext } from 'context';

const Header = ({ handleNav }: HeaderProps) => {
  const handleToggleNav = () => handleNav();
  const { title } = useContext(HeaderTitleContext);

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
