import { Footer } from './components/footer/Footer';
import Header from './components/header/Header'
import { HomeInfoCards } from './components/homeInfoCards/HomeInfoCards'
import { Section } from './components/section/Section';
import Sidebar from './components/sidebar/Sidebar'

function App() {
  return (
    <>
      <div className='main-container'>
        <Header />
        <main role='main' className='main'>
          <Section title='Tu Vehículo en Forma' img='./images/vehicles-collection.png'>
            <HomeInfoCards />
          </Section>
          <Section title='Tu Vehículo en Forma'
            img='./images/car-maintenance.png'
            description='Disfruta de la comodidad de tener tu vehículo en perfecto estado con GearGlen. Gestiona el mantenimiento y las reparaciones con nuestro sistema completo que garantiza la eficiencia y seguridad de cada viaje.'>
          </Section>
        </main>
        <Footer />
      </div>
      <Sidebar />

    </>
  )
}

export default App
