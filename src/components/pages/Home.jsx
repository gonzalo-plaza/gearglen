import { Section } from '../section/Section';
import { HomeInfoCards } from '../homeInfoCards/HomeInfoCards';
export const Home = () => {
	return (
		<>
			<Section
				title='Tu Vehículo en Forma'
				mobileImg='./images/vehicles-collection-600.webp'
				img='./images/vehicles-collection.webp'
			>
				<HomeInfoCards />
			</Section>
			<Section
				title='Mantén tu Vehículo Siempre Listo'
				mobileImg='./images/car-maintenance-700.webp'
				img='./images/car-maintenance.webp'
				description='Disfruta de la comodidad de tener tu vehículo en perfecto estado con GearGlen. Gestiona el mantenimiento y las reparaciones con nuestro sistema completo que garantiza la eficiencia y seguridad de cada viaje.'
			></Section>
		</>
	);
};
