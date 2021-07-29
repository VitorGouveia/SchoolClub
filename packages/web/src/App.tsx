import { HashRouter, Route, Switch } from 'react-router-dom';

import { Theme } from "./contexts/ThemeContext"
import { PWA } from "./pwa"

import { Home } from './pages/Home';
import { GlobalStyles } from './components/Global';

export const App = () => {
  return (
    <HashRouter>
      <Switch>
        <PWA>
          <GlobalStyles>
            <Theme>
              <Route path="/" component={() => <Home />} />
            </Theme>
          </GlobalStyles>
        </PWA>
      </Switch>
    </HashRouter>
  );
};
