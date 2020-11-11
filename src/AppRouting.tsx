import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { AboutPage, ConcertPage, EventsPage, EventDetailsPage } from './pages';

export const AppRouting = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/events" />
      </Route>

      <Route exact path="/events">
        <EventsPage />
      </Route>

      <Route exact path="/events/:id">
        <EventDetailsPage />
      </Route>

      <Route path="/about">
        <AboutPage />
      </Route>

      <Route path="/concerts">
        <ConcertPage />
      </Route>
    </Switch>
  );
};
