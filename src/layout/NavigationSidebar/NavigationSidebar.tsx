import React from 'react';
import { SwipeableDrawer } from '@material-ui/core';

const NavigationSidebar = ({ toggleMenu, handleMenu }: any) => {
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

    handleMenu(open);
  };

  return (
    <>
      <SwipeableDrawer
        anchor="left"
        open={toggleMenu}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <div style={{ width: '300px' }}>test</div>
      </SwipeableDrawer>
    </>
  );
};

export default NavigationSidebar;
