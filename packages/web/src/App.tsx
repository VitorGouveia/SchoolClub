import { useContext } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Theme, ThemeContext } from "./contexts/ThemeContext"

import { Home } from './pages/Home';
import { GlobalStyles } from './components/Global';

export const App = () => {
  const { createTheme } = useContext(ThemeContext)

  /** Set initial app theme */
  // createTheme("dark")

  return (
    <BrowserRouter>
      <Switch>
        <GlobalStyles>
          <Theme>
            <Route path="/">
              <Home />
            </Route>
          </Theme>
        </GlobalStyles>
      </Switch>
    </BrowserRouter>
  );
};
