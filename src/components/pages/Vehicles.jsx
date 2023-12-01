import { Section } from '../section/Section';
import { MdAddCircleOutline } from 'react-icons/md';
import { useVehicleModalStore } from '../../store/vehicleModalStore';
import { AddVehicleModal } from '../modals/addVehicleModal/AddVehicleModal';

export const Vehicles = () => {
	const { launchVehicleModal } = useVehicleModalStore();

	const handleClick = () => {
		launchVehicleModal();
	};

	return (
		<>
			<Section title='Mis Vehículos' img='./images/garaje-vehicles.png'>
				<section className='vehicles-container'>
					<button className='add-vehicle-button' onClick={handleClick}>
						<MdAddCircleOutline className='add-vehicle-button__icon' />
						<span className='add-vehicle-button__text'>Añadir vehículo</span>
					</button>
				</section>
			</Section>
			<AddVehicleModal />
		</>
	);
};
