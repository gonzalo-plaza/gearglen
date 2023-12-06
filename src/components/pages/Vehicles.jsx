import { Section } from '../section/Section';
import { MdAddCircleOutline } from 'react-icons/md';
import { useVehicleModalStore } from '../../store/vehicleModalStore';
import { AddVehicleModal } from '../modals/addVehicleModal/AddVehicleModal';
import { VehicleCard } from '../vehicleCard/VehicleCard';

import { useVehiclesStore } from '../../store/vehiclesStore';

export const Vehicles = () => {
	const { launchVehicleModal } = useVehicleModalStore();
	const { vehicles } = useVehiclesStore();

	const handleClick = () => {
		launchVehicleModal();
	};

	return (
		<>
			<Section
				title='Mis Vehículos'
				img='./images/garaje-vehicles-730.webp'
				imgWidth='730'
				imgHeight='511'
				desktopImg='./images/garaje-vehicles.webp'
				desktopImgHeight='630'
				desktopImgWidth='900'
				altImgText='Dos coches y una moto estacionados frente a un amplio garaje abierto, repleto de estanterías y herramientas'
			>
				<section className='add-vehicle-button-container'>
					<button className='add-vehicle-button' onClick={handleClick}>
						<MdAddCircleOutline className='add-vehicle-button__icon' />
						<span className='add-vehicle-button__text'>Añadir vehículo</span>
					</button>
				</section>
				<section className='vehicles-container'>
					{vehicles &&
						vehicles.map(vehicle => (
							<VehicleCard key={vehicle.id.value} vehicle={vehicle} />
						))}
				</section>
			</Section>
			<AddVehicleModal />
		</>
	);
};
