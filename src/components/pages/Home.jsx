import { Section } from "../section/Section"
import { HomeInfoCards } from "../homeInfoCards/HomeInfoCards"
export const Home = () => {
    return(
        <>
            <Section title='Tu Vehículo en Forma' img='./images/vehicles-collection.png'>
            <HomeInfoCards />
          </Section>
          <Section title='Mantén tu Vehículo Siempre Listo'
            img='./images/car-maintenance.png'
            description='Disfruta de la comodidad de tener tu vehículo en perfecto estado con GearGlen. Gestiona el mantenimiento y las reparaciones con nuestro sistema completo que garantiza la eficiencia y seguridad de cada viaje.'>
          </Section>
        </>
    )
}