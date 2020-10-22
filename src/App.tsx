import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Main, Navigation } from './layout';
import { AppRouting } from './AppRouting';

const App = () => (
  <div className="App">
    <Router>
      <Navigation />
      <Main>
        <AppRouting />
      </Main>
    </Router>
  </div>
);

export default App;
