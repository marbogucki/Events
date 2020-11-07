import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header, Main, NavigationSidebar } from 'layout';
import { AppRouting } from './AppRouting';

const App = () => {
  const [toggleMenu, setToggleMenu] = React.useState<boolean>(false);
  const handleToggleMenu = () => setToggleMenu((toggleMenu) => !toggleMenu);
  const handleMenu = (status: boolean) => () => setToggleMenu(status);

  return (
    <div>
      <Header title="Dashboard" onToggleMenu={handleToggleMenu} />
      <Router>
        <NavigationSidebar
          toggleMenu={toggleMenu}
          handleMenu={handleMenu(false)}
        />
        <Main>
          <AppRouting />
        </Main>
      </Router>
    </div>
  );
};

export default App;
