// Styles
import './addVehicleModal.scss';

import { MdClear } from 'react-icons/md';

import { useVehicleModalStore } from '../../../store/vehicleModalStore';
import { AddVehicleForm } from '../../forms/addVehicleForm/AddVehicleForm';

export const AddVehicleModal = () => {
	const { showVehicleModal, showVehicleModalClass, hideVehicleModal } =
		useVehicleModalStore();

	const handleCloseClick = () => {
		hideVehicleModal();
	};

	return (
		<section className={`vehicle-modal ${showVehicleModal ? 'is-active' : ''}`}>
			<div
				className={`vehicle-modal__background ${showVehicleModalClass}`}
			></div>
			<section className={`vehicle-modal-card ${showVehicleModalClass}`}>
				<header className='vehicle-modal-card-header'>
					<span>Añadir vehículo</span>
					<div
						className='vehicle-modal-close'
						onClick={handleCloseClick}
						role='button'
						aria-label='Close sidebar'
					>
						<MdClear className='vehicle-modal-close__icon' />
					</div>
				</header>
				<div className='vehicle-modal-card-body'>
					<AddVehicleForm />
				</div>
			</section>
		</section>
	);
};
