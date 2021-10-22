import { lazy, Suspense, useEffect } from 'react';
import { Route } from 'react-router-dom';
/*  */
import { FontSize, Theme } from "./contexts";
import { register } from './pwa/serviceWorkerRegistration';
import { Router } from './router';
/*  */
const Home = lazy(() => import("./pages/Home"))

export const App = () => {
	useEffect(() => {
		register();
	}, []);
	// <Route exact path="/loading" component={() => <Loading />} />
						
	// 					<Route exact path="/fobos">
	// 						<Redirect to="/" />
	// 					</Route>

	return (
		<Router>
			<FontSize>
				<Theme>
					<Suspense fallback={<h1>loading...</h1>}>
						<Route exact path="/" component={() => <Home />} />
					</Suspense>
				</Theme>
			</FontSize>
		</Router>
	);
};
