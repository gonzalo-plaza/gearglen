import { Section } from '../section/Section';
import { MdAddCircleOutline } from 'react-icons/md';
import { useVehicleModalStore } from '../../store/vehicleModalStore';
import { AddVehicleModal } from '../modals/addVehicleModal/AddVehicleModal';
import { useVehiclesStore } from '../../store/vehiclesStore';

export const Vehicles = () => {
	const { launchVehicleModal } = useVehicleModalStore();
	const vehicles = useVehiclesStore(state => state.vehicles);

	const handleClick = () => {
		launchVehicleModal();
	};

	return (
		<>
			<Section title='Mis Vehículos' img='./images/garaje-vehicles.png'>
				<section>
					<ul>
						{vehicles &&
							vehicles.map(vehicle => {
								return <li key={vehicle.id}>{JSON.stringify(vehicle)}</li>;
							})}
					</ul>
				</section>
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
