import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header, Main, NavigationSidebar } from 'layout';
import { AppRoutes } from './AppRoutes';
import { HeaderTitleContext } from 'context';

const App = () => {
  const [title, setTitle] = useState('');
  const [toggleNav, setToggleNav] = useState<boolean>(false);
  const handleToggleNav = () => setToggleNav((toggleNav) => !toggleNav);

  return (
    <Router>
      <HeaderTitleContext.Provider value={{ title, setTitle }}>
        <Header handleNav={handleToggleNav} />
        <NavigationSidebar toggleNav={toggleNav} handleNav={handleToggleNav} />
        <Main>
          <AppRoutes />
        </Main>
      </HeaderTitleContext.Provider>
    </Router>
  );
};

export default App;
