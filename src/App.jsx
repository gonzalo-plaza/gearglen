import { Navigate, useRoutes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('./components/pages/Home'));
const Vehicles = lazy(() => import('./components/pages/Vehicles'));
const Sidebar = lazy(() => import('./components/sidebar/Sidebar'));
const Footer = lazy(() => import('./components/footer/Footer'));
const Header = lazy(() => import('./components/header/Header'));

const routes = [
	{
		path: '/',
		element: (
			<Suspense>
				<Home />
			</Suspense>
		),
	},
	{
		path: '*',
		element: <Navigate to='/' />,
	},
	{
		path: 'mis-vehiculos',
		element: (
			<Suspense>
				<Vehicles />
			</Suspense>
		),
	},
];

function App() {
	const element = useRoutes(routes);
	return (
		<>
			<div className='main-container'>
				<Suspense>
					<Header />
				</Suspense>
				<main role='main' className='main'>
					{element}
				</main>
				<Suspense>
					<Footer />
				</Suspense>
			</div>
			<Suspense>
				<Sidebar />
			</Suspense>
		</>
	);
}

export default App;
