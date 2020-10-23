import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Colors } from 'style/colors';

export const NavigationStyled = styled.nav`
  background-color: ${Colors.PRIMARY_COLOR};
`;

export const NavigationList = styled.ul`
  margin: 0;
  padding: 10px 15px 15px;
  list-style-type: none;
`;

export const NavigationItem = styled.li`
  margin: 5px 0;
`;

export const NavLinkStyled = styled(NavLink)`
  display: block;
  padding: 5px;
  color: rgba(${Colors.RGB_WHITE}, 0.55);
  text-decoration: none;

  &:hover,
  &.active {
    color: rgb(${Colors.RGB_WHITE});
  }

  &:hover {
    text-decoration: underline;
  }
`;
