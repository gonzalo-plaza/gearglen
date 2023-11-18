import Header from './components/header/Header'
import { HomeInfoCards } from './components/homeInfoCards/HomeInfoCards'
import Sidebar from './components/sidebar/Sidebar'

function App() {
  return (
    <>
      <div className='main-container'>
        <Header />
        <main role='main' className='main'>
          <section>
            <h1 className='section__title'>Tu Vehículo en Forma</h1>
            <div className='section__title-line'></div>
            <img className='section__img' src='./images/vehicles-collection.png' />
            <HomeInfoCards />
          </section>
          <section>
            <h1 className='section__title'>Mantén tu Vehículo Siempre Listo</h1>
            <div className='section__title-line'></div>
            <img className='section__img' src='./images/car-maintenance.png' />
          </section>
        </main>
      </div>
      <Sidebar />
    </>
  )
}

export default App
