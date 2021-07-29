import { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

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
              <Route path="/" exact component={() => <Home />} />
            </Theme>
          </GlobalStyles>
        </PWA>
        </Suspense>
      </Switch>
    </BrowserRouter>
  );
};
