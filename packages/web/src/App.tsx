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
const Login = lazy(() => import("./pages/Auth/Login"))

export const App = () => {
	const HeaderRef = useRef<any>(null)
	
	const [headerHeight, setHeaderHeight] = useState(() => {
		return HeaderRef?.current?.offsetHeight || 0
	})
	
	useEffect(() => {
		register();
	}, []);

	useLayoutEffect(() => {
		document.onreadystatechange = () => {
			const resizeObserver = new ResizeObserver(entries => {
				const newHeight = entries[0].target.clientHeight
				
				setHeaderHeight(newHeight)
			})

			resizeObserver.observe(document.querySelector("header")!)
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

							<Route path="/login" component={() => <Login />} />
						</Main>
					</Suspense>
				</Theme>
			</FontSize>
		</Router>
	);
};
