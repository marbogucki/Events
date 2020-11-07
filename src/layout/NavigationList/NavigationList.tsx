import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { NavigationListProps, NavItem } from './NavigationList.model';
import { navItems } from './NavigationItems';

const NavigationList = ({ handleCloseNav }: NavigationListProps) => {
  return (
    <List component="nav">
      {navItems.map(({ url, label }: NavItem) => (
        <ListItem
          key={url}
          button
          divider
          component={Link}
          to={url}
          onClick={handleCloseNav}
        >
          <ListItemText primary={label} />
        </ListItem>
      ))}
    </List>
  );
};

export default NavigationList;
