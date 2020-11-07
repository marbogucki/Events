import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header, Main, NavigationSidebar } from 'layout';
import { AppRouting } from './AppRouting';

const App = () => {
  const [toggleMenu, setToggleMenu] = React.useState<boolean>(false);
  const handleToggleMenu = () => setToggleMenu((toggleMenu) => !toggleMenu);

  return (
    <div>
      <Header title="Dashboard" onToggleMenu={handleToggleMenu} />
      <Router>
        <NavigationSidebar
          toggleMenu={toggleMenu}
          handleMenu={handleToggleMenu}
        />
        <Main>
          <AppRouting />
        </Main>
      </Router>
    </div>
  );
};

export default App;
