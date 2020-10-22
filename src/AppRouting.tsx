import React from 'react';
import { Route, Switch } from 'react-router-dom';

// pages
import { About } from './pages/About';
import { Events } from './pages/Events';

export const AppRouting = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Events />
      </Route>

      <Route path="/about">
        <About />
      </Route>
    </Switch>
  );
};
