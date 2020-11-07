import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header, Main, NavigationSidebar } from 'layout';
import { AppRoutes } from './AppRoutes';

const App = () => {
  const [toggleNav, setToggleNav] = useState<boolean>(false);
  const handleToggleNav = () => setToggleNav((toggleNav) => !toggleNav);

  return (
    <div>
      <Header title="Dashboard" handleNav={handleToggleNav} />
      <Router>
        <NavigationSidebar toggleNav={toggleNav} handleNav={handleToggleNav} />
        <Main>
          <AppRoutes />
        </Main>
      </Router>
    </div>
  );
};

export default App;
