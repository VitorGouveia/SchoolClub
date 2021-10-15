import { Suspense, useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';

import { Theme } from './contexts/ThemeContext';
import { register } from './pwa/serviceWorkerRegistration';

import { Router } from './router';

export const App = () => {
	useEffect(() => {
		register();
	}, []);

	return (
		<Router>
			<Theme>
				<Suspense fallback={() => <h1>aaaa</h1>}>
					<Route exact path="/" component={() => <h1>aaaaaaaa</h1>} />
					{/* <Route exact path="/loading" component={() => <Loading />} />
          <Route exact path="/fobos">
            <Redirect to="/" />
          </Route> */}
				</Suspense>
			</Theme>
		</Router>
	);
};
