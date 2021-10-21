import { Suspense, useEffect } from 'react';
import { Route } from 'react-router-dom';
/*  */
import { FontSize, Theme } from "./contexts";
/*  */
import { Home } from "./pages/Home";
import { register } from './pwa/serviceWorkerRegistration';
import { Router } from './router';

export const App = () => {
	useEffect(() => {
		register();
	}, []);

	return (
		<Router>
			<FontSize>
				<Theme>
					<Suspense fallback={() => <h1>aaaa</h1>}>
						<Route exact path="/" component={() => <Home />} />
						{/* <Route exact path="/loading" component={() => <Loading />} />
						<Route exact path="/fobos">
						<Redirect to="/" />
					</Route> */}
					</Suspense>
				</Theme>
			</FontSize>
		</Router>
	);
};
