import { BrowserRouter, Route, Routes, useLocation } from 'react-router';
import { Home } from '../../pages/Home';
import { AboutPomodoro } from '../../pages/AboutPomodoro';
import { PageNotFound } from '../../pages/PageNotFound';
import { useEffect } from 'react';

const ScrollToTop = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		// console.log(pathname);
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, [pathname]);
	return null;
};

export const MainRouter = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route
						path='/about-pomodoro/'
						element={<AboutPomodoro />}
					/>
					<Route path='*' element={<PageNotFound />} />
				</Routes>
				<ScrollToTop />
			</BrowserRouter>
		</>
	);
};
