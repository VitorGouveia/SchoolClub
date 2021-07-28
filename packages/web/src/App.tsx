import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Theme } from "./contexts/ThemeContext"

import { Home } from './pages/Home';
import { GlobalStyles } from './components/Global';

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <GlobalStyles>
          <Theme>
            <Route path="/" component={() => <Home />} />
          </Theme>
        </GlobalStyles>
      </Switch>
    </BrowserRouter>
  );
};
