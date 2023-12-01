import { InfoCard } from '../infoCard/InfoCard';

export const HomeInfoCards = () => {
	return (
		<section className='home-info-cards-container'>
			<InfoCard
				src='/images/car-history-500.jpg'
				desktopSrc='/images/car-history.jpg'
				alt=''
				title='Tu vehículo al día'
				description='Registra en el historial del vehículo cada mantenimiento y reparación, e incluye alertas para próximos servicios.'
			/>
			<InfoCard
				src='/images/garage-500.jpg'
				desktopSrc='/images/garage.jpg'
				alt=''
				title='Control de vehículos'
				description='Almacena y accede fácilmente al historial completo de tus vehículos en un solo lugar.'
			/>
			<InfoCard
				src='/images/share-history-500.jpg'
				desktopSrc='/images/share-history.jpg'
				alt=''
				title='Comparte el historial'
				description='Comparte el historial de reparaciones y mantenimiento de tu vehículo fácilmente con quien quieras.'
			/>
			<InfoCard
				src='/images/gears-500.jpg'
				desktopSrc='/images/gears.jpg'
				alt=''
				title='Consejos para tu vehículo'
				description='Los mejores consejos para el mantenimiento  de tus vehículos y  su cuidado prolongado con prácticas recomendadas por expertos.'
			/>
			<InfoCard
				src='/images/virtual-asistant-500.jpg'
				desktopSrc='/images/virtual-asistant.jpg'
				alt=''
				title='Asistente virtual'
				description='Consulta con el asistente virtual todas las dudas que tengas acerca de tus vehículos.'
			/>
			<InfoCard
				src='/images/product-recomendations-500.jpg'
				desktopSrc='/images/product-recomendations.jpg'
				alt=''
				title='Productos recomendados'
				description='Navega por nuestro catálogo de productos para coches, seleccionados por expertos para el mantenimiento y la eficiencia de tu vehículo.'
			/>
		</section>
	);
};
