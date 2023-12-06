// Styles
import './homeInfoCards.scss';

import { InfoCard } from '../infoCard/InfoCard';

export const HomeInfoCards = () => {
	return (
		<section className='home-info-cards-container'>
			<InfoCard
				src='/images/car-history-400.webp'
				desktopSrc='/images/car-history.webp'
				alt=''
				title='Tu vehículo al día'
				description='Registra en el historial del vehículo cada mantenimiento y reparación, e incluye alertas para próximos servicios.'
			/>
			<InfoCard
				src='/images/garage-400.webp'
				desktopSrc='/images/garage.webp'
				alt=''
				title='Control de vehículos'
				description='Almacena y accede fácilmente al historial completo de tus vehículos en un solo lugar.'
			/>
			<InfoCard
				src='/images/share-history-400.webp'
				desktopSrc='/images/share-history.webp'
				alt=''
				title='Comparte el historial'
				description='Comparte el historial de reparaciones y mantenimiento de tu vehículo fácilmente con quien quieras.'
			/>
			<InfoCard
				src='/images/gears-400.webp'
				desktopSrc='/images/gears.webp'
				alt=''
				title='Consejos para tu vehículo'
				description='Los mejores consejos para el mantenimiento  de tus vehículos y  su cuidado prolongado con prácticas recomendadas por expertos.'
			/>
			<InfoCard
				src='/images/virtual-asistant-400.webp'
				desktopSrc='/images/virtual-asistant.webp'
				alt=''
				title='Asistente virtual'
				description='Consulta con el asistente virtual todas las dudas que tengas acerca de tus vehículos.'
			/>
			<InfoCard
				src='/images/product-recomendations-400.webp'
				desktopSrc='/images/product-recomendations.webp'
				alt=''
				title='Productos recomendados'
				description='Navega por nuestro catálogo de productos para coches, seleccionados por expertos para el mantenimiento y la eficiencia de tu vehículo.'
			/>
		</section>
	);
};
