import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { About, Events, EventDetails } from './pages';

export const AppRouting = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/events" />
      </Route>

      <Route exact path="/events">
        <Events />
      </Route>

      <Route exact path="/events/:id">
        <EventDetails />
      </Route>

      <Route path="/about">
        <About />
      </Route>
    </Switch>
  );
};
