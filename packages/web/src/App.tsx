import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home } from './components/Home';
import { GlobalStyles } from './components/Global';

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <GlobalStyles>
          <Route path="/">
            <Home />
          </Route>
        </GlobalStyles>
      </Switch>
    </BrowserRouter>
  );
};
