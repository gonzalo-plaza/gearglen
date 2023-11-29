import { Navigate } from 'react-router-dom';
import { Footer } from './components/footer/Footer';
import Header from './components/header/Header'
import { Home } from './components/pages/Home';
import Sidebar from './components/sidebar/Sidebar'

import { useRoutes } from 'react-router-dom';
import { Vehicles } from './components/pages/Vehicles';

const routes = [
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "*",
    element: <Navigate to='/'/>
  },
  {
    path: 'mis-vehiculos',
    element: <Vehicles/>
  }
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
  )
}

export default App
