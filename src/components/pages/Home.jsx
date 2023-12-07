import { Section } from '../section/Section';
import { HomeInfoCards } from '../homeInfoCards/HomeInfoCards';
const Home = () => {
	return (
		<>
			<Section
				title='Tu Vehículo en Forma'
				img='./images/vehicles-collection-600.webp'
				imgWidth='600'
				imgHeight='303'
				desktopImg='./images/vehicles-collection.webp'
				desktopImgHeight='606'
				desktopImgWidth='1200'
				reduceImg
				altImgText='Varios coches y motos de color azul orientados hacia el frente'
			>
				<HomeInfoCards />
			</Section>
			<Section
				title='Mantén tu Vehículo Siempre Listo'
				img='./images/car-maintenance-700.webp'
				imgWidth='700'
				imgHeight='377'
				desktopImg='./images/car-maintenance.webp'
				desktopImgHeight='592'
				desktopImgWidth='1100'
				reduceImg
				altImgText='SUV azul en un taller mecánico con herramientas y piezas de automóvil colgadas en la pared del fondo'
				description='Disfruta de la comodidad de tener tu vehículo en perfecto estado con GearGlen. Gestiona el mantenimiento y las reparaciones con nuestro sistema completo que garantiza la eficiencia y seguridad de cada viaje.'
			></Section>
		</>
	);
};

export default Home;
