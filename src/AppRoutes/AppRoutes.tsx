import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { routes } from './routes';

const AppRoutes = () => {
  return (
    <Switch>
      {routes.map(({ path, component }) => (
        <Route key={path} exact path={path}>
          {component}
        </Route>
      ))}
    </Switch>
  );
};

export default AppRoutes;
