import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { TypographyVariant } from 'material/models';

export const MenuIconStyled = styled(MenuIcon)`
  font-size: 2.4rem;
`;

export const TypographyStyled = styled(Typography)`
  text-transform: uppercase;
  font-weight: bold;
  margin-left: 10px;

  ${(props) =>
    props.variant === TypographyVariant.H3 &&
    `
    font-size: 1.6rem;
  `}

  ${(props) =>
    props.variant === TypographyVariant.H4 &&
    `
    font-size: 1.4rem;
  `};

  ${(props) =>
    props.variant === TypographyVariant.H5 &&
    `
    font-size: 1.2rem;
  `};

  ${(props) =>
    props.variant === TypographyVariant.H6 &&
    `
    font-size: 1.0rem;
  `};
`;
