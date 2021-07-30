import { Suspense } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import { Theme } from "./contexts/ThemeContext"
import { PWA } from "./pwa"

import { Home, Loading } from './pages';

import { GlobalStyles } from './components/Global';

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Suspense fallback={Loading}>
          <PWA>
            <GlobalStyles>
              <Theme>
                <Route exact path="/" component={() => <Home />} />
                <Route exact path="/fobos">
                  <Redirect to="/" />
                </Route> 
              </Theme>
            </GlobalStyles>
          </PWA>
        </Suspense>
      </Switch>
    </BrowserRouter>
  );
};
