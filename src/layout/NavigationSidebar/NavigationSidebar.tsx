import React from 'react';
import { SwipeableDrawer } from '@material-ui/core';
import { NavigationList } from 'layout';
import { NavigationSidebarProps } from './NavigationSidebar.model';

const NavigationSidebar = ({
  toggleNav,
  handleNav,
}: NavigationSidebarProps) => {
  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    handleNav(open);
  };

  return (
    <>
      <SwipeableDrawer
        anchor="left"
        open={toggleNav}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <div style={{ width: '300px' }}>
          <NavigationList handleCloseNav={toggleDrawer(false)} />
        </div>
      </SwipeableDrawer>
    </>
  );
};

export default NavigationSidebar;
