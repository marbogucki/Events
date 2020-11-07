import React from 'react';
import { Button, Snackbar } from '@material-ui/core';

const MaterialPage = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event: any, reason: any) => {
    if (reason === 'click') {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClick}>
        Open success snackbar
      </Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <p>This is a success message!</p>
      </Snackbar>
    </>
  );
};
export default MaterialPage;
