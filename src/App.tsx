import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header, Main, NavigationSidebar } from 'layout';
import { AppRouting } from './AppRouting';

const App = () => {
  const [toggleNav, setToggleNav] = React.useState<boolean>(false);
  const handleToggleNav = () => setToggleNav((toggleNav) => !toggleNav);

  return (
    <div>
      <Header title="Dashboard" handleNav={handleToggleNav} />
      <Router>
        <NavigationSidebar toggleNav={toggleNav} handleNav={handleToggleNav} />
        <Main>
          <AppRouting />
        </Main>
      </Router>
    </div>
  );
};

export default App;
