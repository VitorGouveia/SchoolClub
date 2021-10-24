import { lazy, Suspense, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Route } from 'react-router-dom';
/*  */
import { Header } from "./components";
import { FontSize, Theme } from "./contexts";
import { register } from './pwa/serviceWorkerRegistration';
import { Router } from './router';
import { Main } from "./styles/global";
/*  */
const Home = lazy(() => import("./pages/Home"))

export const App = () => {
	const [headerHeight, setHeaderHeight] = useState(0)
	const HeaderRef = useRef<any>(null)

	useEffect(() => {
		register();
	}, []);
	
	useLayoutEffect(() => {
		document.onreadystatechange = () => {
			setHeaderHeight(HeaderRef?.current?.offsetHeight || 0)
		};
	}, [HeaderRef])

	// <Route exact path="/loading" component={() => <Loading />} />
						
	// 					<Route exact path="/fobos">
	// 						<Redirect to="/" />
	// 					</Route>

	return (
		<Router>
			<FontSize>
				<Theme>
					<Suspense fallback={<h1>loading...</h1>}>
						<Header headerRef={HeaderRef} />
						
						<Main paddingTop={headerHeight}>
							<Route exact path="/" component={() => <Home />} />
						</Main>
					</Suspense>
				</Theme>
			</FontSize>
		</Router>
	);
};
