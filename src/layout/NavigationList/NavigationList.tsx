import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { NavItem } from './NavigationList.model';
import { navItems } from './NavigationItems';

const NavigationList = () => {
  return (
    <List component="nav">
      {navItems.map(({ url, label }: NavItem) => (
        <ListItem button divider component={Link} to={url}>
          <ListItemText primary={label} />
        </ListItem>
      ))}
    </List>
  );
};

export default NavigationList;
