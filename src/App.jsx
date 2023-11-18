import Header from './components/header/Header'
import { HomeInfoCards } from './components/homeInfoCards/HomeInfoCards'
import Sidebar from './components/sidebar/Sidebar'

function App() {
  return (
    <>
      <div className='main-container'>
        <Header />
        <main role='main' className='main'>
          <section className='home-section'>
            <h1 className='section__title'>Tu Vehículo en Forma</h1>
            <div className='section__title-line'></div>
            <img className='section__img' src='./images/vehicles-collection.png' />
            <HomeInfoCards />
          </section>
          <section>
            <h1 className='section__title'>Mantén tu Vehículo Siempre Listo</h1>
            <div className='section__title-line'></div>
            <img className='section__img' src='./images/car-maintenance.png' />
            <p className='section__description'>
              Disfruta de la comodidad de tener tu vehículo en perfecto estado con GearGlen. Gestiona el mantenimiento y las reparaciones con nuestro sistema completo que garantiza la eficiencia y seguridad de cada viaje.
            </p>
          </section>
          <footer>
            
          </footer>
        </main>
      </div>
      <Sidebar />
    </>
  )
}

export default App
