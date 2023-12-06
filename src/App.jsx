import { Navigate, useRoutes } from 'react-router-dom';
import { Footer } from './components/footer/Footer';
import Header from './components/header/Header';
// import { Home } from './components/pages/Home';
import Sidebar from './components/sidebar/Sidebar';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('./components/pages/Home'));
const Vehicles = lazy(() => import('./components/pages/Vehicles'));

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
				<Header />
				<main role='main' className='main'>
					{element}
				</main>
				<Footer />
			</div>
			<Sidebar />
		</>
	);
}

export default App;
