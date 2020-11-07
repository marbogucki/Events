import React, { useContext, KeyboardEvent, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { NavigationListProps, NavItem } from './NavigationList.model';
import { navItems } from './NavigationItems';
import { HeaderTitleContext } from 'context';

const NavigationList = ({ handleCloseNav }: NavigationListProps) => {
  const { setTitle } = useContext(HeaderTitleContext);

  const handleItemMenu = (label: string) => (
    event: KeyboardEvent | MouseEvent
  ) => {
    setTitle(label);
    handleCloseNav(event);
  };

  return (
    <List component="nav">
      {navItems.map(({ url, label }: NavItem) => (
        <ListItem
          key={url}
          button
          divider
          component={Link}
          to={url}
          onClick={handleItemMenu(label)}
        >
          <ListItemText primary={label} />
        </ListItem>
      ))}
    </List>
  );
};

export default NavigationList;
