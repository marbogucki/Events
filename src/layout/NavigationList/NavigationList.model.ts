import { KeyboardEvent, MouseEvent } from 'react';

export type NavigationListProps = {
  handleCloseNav: (event: KeyboardEvent | MouseEvent) => void;
};

export type NavItem = {
  url: string;
  label: string;
};
