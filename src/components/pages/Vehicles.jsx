import { Section } from '../section/Section';
import {
	MdAddCircleOutline,
	MdCopyright,
	MdExplore,
	MdLocalGasStation,
	MdMenuBook,
	MdCalendarMonth,
	MdPin,
	MdDelete,
} from 'react-icons/md';
import { useVehicleModalStore } from '../../store/vehicleModalStore';
import { AddVehicleModal } from '../modals/addVehicleModal/AddVehicleModal';
import { useVehiclesStore } from '../../store/vehiclesStore';

export const Vehicles = () => {
	const { launchVehicleModal } = useVehicleModalStore();
	const { vehicles, removeVehicle } = useVehiclesStore();

	const handleClick = () => {
		launchVehicleModal();
	};

	const handleRemove = id => () => {
		removeVehicle(id);
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
				<section className='vehicles-container-article'>
					{vehicles &&
						vehicles.map(vehicle => {
							return (
								<article key={vehicle.id.value} className='vehicle-item'>
									<header>
										<img
											className='vehicle-item__img'
											src={`./images/vehicle-${vehicle.type.value}.png`}
										/>
										<div
											className='remove-vehicle-button'
											onClick={handleRemove(vehicle.id.value)}
										>
											<MdDelete className='remove-vehicle-button__icon' />
										</div>
									</header>
									<div>
										<h3>{vehicle.name.value}</h3>
										<ul>
											<li className='vehicle-detail'>
												<MdCopyright className='vehicle-detail__icon' />
												<span
													className={`vehicle-detail__description ${
														vehicle.brand.noAdded ? 'no-added' : ''
													}`}
												>
													{vehicle.brand.value}
												</span>
											</li>
											<li className='vehicle-detail'>
												<MdPin className='vehicle-detail__icon' />
												<span
													className={`vehicle-detail__description ${
														vehicle.licensePlate.noAdded ? 'no-added' : ''
													}`}
												>
													{vehicle.licensePlate.value}
												</span>
											</li>
											<li className='vehicle-detail'>
												<MdExplore className='vehicle-detail__icon' />
												<span
													className={`vehicle-detail__description ${
														vehicle.kilometers.noAdded ? 'no-added' : ''
													}`}
												>
													{vehicle.kilometers.value}
												</span>
											</li>
											<li className='vehicle-detail'>
												<MdMenuBook className='vehicle-detail__icon' />
												<span
													className={`vehicle-detail__description ${
														vehicle.model.noAdded ? 'no-added' : ''
													}`}
												>
													{vehicle.model.value}
												</span>
											</li>
											<li className='vehicle-detail'>
												<MdCalendarMonth className='vehicle-detail__icon' />
												<span
													className={`vehicle-detail__description ${
														vehicle.date.noAdded ? 'no-added' : ''
													}`}
												>
													{vehicle.date.value}
												</span>
											</li>
											<li className='vehicle-detail'>
												<MdLocalGasStation className='vehicle-detail__icon' />
												<span
													className={`vehicle-detail__description ${
														vehicle.fuel.noAdded ? 'no-added' : ''
													}`}
												>
													{vehicle.fuel.value}
												</span>
											</li>
										</ul>
									</div>
								</article>
							);
						})}
				</section>
			</Section>
			<AddVehicleModal />
		</>
	);
};
