import { Navigate, useRoutes } from 'react-router-dom';
import Home from './components/pages/Home';
import Vehicles from './components/pages/Vehicles';
import Sidebar from './components/sidebar/Sidebar';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

const routes = [
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '*',
		element: <Navigate to='/' />,
	},
	{
		path: 'mis-vehiculos',
		element: <Vehicles />,
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
