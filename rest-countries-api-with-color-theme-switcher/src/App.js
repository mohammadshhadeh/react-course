import React from 'react';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';

import Home from './Pages/Home';
import Single from './Pages/Single';

const App = () => {
	let routes = useRoutes([
		{ path: '*', element: <Home /> },
		{
			path: 'country/:id',
			element: <Single />,
		},
	]);

	return routes;
};

const AppWrapper = () => {
	return (
		<Router>
			<main className="main text-color">
				<App />
			</main>
		</Router>
	);
};

export default AppWrapper;
