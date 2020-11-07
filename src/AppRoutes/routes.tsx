import React from 'react';
import { Redirect } from 'react-router-dom';
import { AboutPage, EventsPage, EventDetailsPage, MaterialPage } from 'pages';
import { Routes } from './routes.model';

export const routes: Routes[] = [
  {
    path: '/',
    component: <Redirect to="/events" />,
  },
  {
    path: '/events',
    component: <EventsPage />,
  },
  {
    path: '/events/:id',
    component: <EventDetailsPage />,
  },
  {
    path: '/about',
    component: <AboutPage />,
  },
  {
    path: '/material',
    component: <MaterialPage />,
  },
];
