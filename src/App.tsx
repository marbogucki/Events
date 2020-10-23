import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Main, Navigation } from 'layout';
import { AppRouting } from './AppRouting';
import { AppContainer } from './App.style';

const App = () => (
  <AppContainer>
    <Router>
      <Navigation />
      <Main>
        <AppRouting />
      </Main>
    </Router>
  </AppContainer>
);

export default App;
