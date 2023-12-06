// Styles
import './vehicleCard.scss';

import { useVehiclesStore } from '../../store/vehiclesStore';
import {
	MdCopyright,
	MdExplore,
	MdLocalGasStation,
	MdMenuBook,
	MdCalendarMonth,
	MdPin,
	MdDelete,
} from 'react-icons/md';

import { vehiclesImgProperties } from '../../constants/vehiclesConstants.js';

import PropTypes from 'prop-types';

export const VehicleCard = ({ vehicle }) => {
	const { removeVehicle } = useVehiclesStore();
	const handleRemove = id => () => {
		removeVehicle(id);
	};

	const vehicleType = vehicle.type.value;

	const vehicleImg = {
		src: `./images/vehicle-${vehicleType}.webp`,
		alt: `${vehiclesImgProperties[vehicleType].alt}`,
		width: `${vehiclesImgProperties[vehicleType].width}`,
		height: `${vehiclesImgProperties[vehicleType].width}`,
	};
	return (
		<article key={vehicle.id.value} className='vehicle-card'>
			<header className='vehicle-card__header'>
				<img
					className='vehicle-card__img'
					src={vehicleImg.src}
					width={vehicleImg.width}
					height={vehicleImg.height}
					alt={vehicleImg.alt}
				/>
				<button
					className='remove-vehicle-button'
					onClick={handleRemove(vehicle.id.value)}
				>
					<MdDelete
						className='remove-vehicle-button__icon'
						aria-label='Remove vehicle'
					/>
				</button>
			</header>
			<div>
				<p className='vehicle-card__title'>{vehicle.name.value}</p>
				<ul className='vehicle-card-detail-list'>
					<li className='vehicle-card-detail'>
						<MdCopyright className='vehicle-card-detail__icon' />
						<span
							className={`vehicle-card-detail__description ${
								vehicle.brand.noAdded ? 'no-added' : ''
							}`}
						>
							{vehicle.brand.value}
						</span>
					</li>
					<li className='vehicle-card-detail'>
						<MdPin className='vehicle-card-detail__icon' />
						<span
							className={`vehicle-card-detail__description ${
								vehicle.licensePlate.noAdded ? 'no-added' : ''
							}`}
						>
							{vehicle.licensePlate.value}
						</span>
					</li>
					<li className='vehicle-card-detail'>
						<MdExplore className='vehicle-card-detail__icon' />
						<span
							className={`vehicle-card-detail__description ${
								vehicle.kilometers.noAdded ? 'no-added' : ''
							}`}
						>
							{vehicle.kilometers.value}
						</span>
					</li>
					<li className='vehicle-card-detail'>
						<MdMenuBook className='vehicle-card-detail__icon' />
						<span
							className={`vehicle-card-detail__description ${
								vehicle.model.noAdded ? 'no-added' : ''
							}`}
						>
							{vehicle.model.value}
						</span>
					</li>
					<li className='vehicle-card-detail'>
						<MdCalendarMonth className='vehicle-card-detail__icon' />
						<span
							className={`vehicle-card-detail__description ${
								vehicle.date.noAdded ? 'no-added' : ''
							}`}
						>
							{vehicle.date.value}
						</span>
					</li>
					<li className='vehicle-card-detail'>
						<MdLocalGasStation className='vehicle-card-detail__icon' />
						<span
							className={`vehicle-card-detail__description ${
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
};

VehicleCard.propTypes = {
	vehicle: PropTypes.object.isRequired,
};
