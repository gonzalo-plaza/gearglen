import { MdReport, MdClear } from 'react-icons/md';

import { useVehicleModalStore } from '../../../store/vehicleModalStore';

import { useForm } from 'react-hook-form';

export const AddVehicleModal = () => {
	const { showVehicleModal, showVehicleModalClass, hideVehicleModal } =
		useVehicleModalStore();
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	console.log(errors);

	const handleCloseClick = () => {
		hideVehicleModal();
	};

	const handleCancelClick = () => {
		hideVehicleModal();
		reset();
	};

	const getMaxDate = () => {
		const today = new Date();
		const day = today.getDate().toString().padStart(2, '0');
		const month = (today.getMonth() + 1).toString().padStart(2, '0');
		const year = today.getFullYear();

		return `${year}-${month}-${day}`;
	};

	const maxDate = getMaxDate();

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
					<form
						id='addVehicleForm'
						className='add-vehicle-form'
						onSubmit={handleSubmit(data => {
							console.log(data);
						})}
					>
						<div className='add-vehicle-form-item-container'>
							<label htmlFor='name' className='add-vehicle-form__label'>
								Nombre del vehículo
							</label>
							<input
								type='text'
								className={`add-vehicle-form__input ${
									errors?.name ? 'is-error' : ''
								}`}
								placeholder='Introduce un nombre para tu vehículo'
								{...register('name', {
									required: {
										value: true,
										message: 'Introduce un nombre para tu vehículo',
									},
								})}
							/>
							{errors?.name && (
								<p className='add-vehicle-form__error-message'>
									<MdReport />
									<span>{errors.name.message}</span>
								</p>
							)}
						</div>
						<div className='add-vehicle-form-input-group'>
							<div className='add-vehicle-form-item-container grow-1'>
								<label htmlFor='type' className='add-vehicle-form__label'>
									Vehículo
								</label>
								<select
									name='type'
									id='vehicle'
									className={`add-vehicle-form__select ${
										errors?.type ? 'is-error' : ''
									}`}
									{...register('type', {
										required: {
											value: true,
											message: 'Selecciona un tipo de vehículo',
										},
									})}
								>
									<option value='' disabled selected>
										Selecciona un tipo de vehículo
									</option>
									<option value='car'>Coche</option>
									<option value='motorcicle'>Moto</option>
									<option value='truck'>Camión</option>
								</select>
								{errors?.type && (
									<p className='add-vehicle-form__error-message'>
										<MdReport />
										<span>{errors.type.message}</span>
									</p>
								)}
							</div>
							<div className='add-vehicle-form-item-container grow1'>
								<label htmlFor='kilometers' className='add-vehicle-form__label'>
									Kilómetros
								</label>
								<input
									type='number'
									className='add-vehicle-form__input'
									placeholder='Introduce el kilometraje de tu vehículo'
									{...register('kilometers')}
								/>
							</div>
						</div>
						<div className='add-vehicle-form-input-group'>
							<div className='add-vehicle-form-item-container grow-1'>
								<label htmlFor='brand' className='add-vehicle-form__label'>
									Marca
								</label>
								<select
									id='brand'
									className={`add-vehicle-form__select ${
										errors?.brand ? 'is-error' : ''
									}`}
									{...register('brand', {
										required: {
											value: true,
											message: 'Selecciona la marca de tu vehículo',
										},
									})}
								>
									<option value='' disabled selected>
										Selecciona la marca
									</option>
									<option value='toyota'>Toyota</option>
									<option value='seat'>Seat</option>
									<option value='peugeot'>Peugeot</option>
									<option value='kia'>Kia</option>
									<option value='volkswagen'>Volkswagen</option>
									<option value='hyundai'>Hyundai</option>
									<option value='renault'>Renault</option>
									<option value='dacia'>Dacia</option>
									<option value='citroën'>Citroën</option>
									<option value='mercedes'>Mercedes</option>
									<option value='audi'>Audi</option>
									<option value='ford'>Ford</option>
									<option value='opel'>Opel</option>
									<option value='skoda'>Skoda</option>
									<option value='bmw'>BMW</option>
									<option value='otro'>Otro</option>
								</select>
								{errors?.brand && (
									<p className='add-vehicle-form__error-message'>
										<MdReport />
										<span>{errors.brand.message}</span>
									</p>
								)}
							</div>
							<div className='add-vehicle-form-item-container grow-1'>
								<label htmlFor='model' className='add-vehicle-form__label'>
									Modelo
								</label>
								<input
									type='text'
									className='add-vehicle-form__input'
									placeholder='Introduce el modelo te tu vehículo'
									{...register('model')}
								/>
							</div>
						</div>
						<div className='add-vehicle-form-input-group'>
							<div className='add-vehicle-form-item-container grow-1'>
								<label
									htmlFor='licensePlate'
									className='add-vehicle-form__label'
								>
									Matrícula
								</label>
								<input
									type='text'
									className={`add-vehicle-form__input ${
										errors?.licensePlate ? 'is-error' : ''
									}`}
									placeholder='Introduce la matrícula de tu vehículo'
									{...register('licensePlate', {
										pattern: {
											value:
												/^(([A-Z]{1,3}-?\d{1,6})|([A-Z]{1,2}-?\d{4}-?[A-Z]{1,2})|\d{4}[BCDFGHJKLMNPRSTVWXYZ]{3}|[A-Z]\d{4}[A-Z]{3})$/,
											message: 'Introduce una matrícula correcta (ES)',
										},
									})}
								/>
								{errors?.licensePlate && (
									<p className='add-vehicle-form__error-message'>
										<MdReport />
										<span>{errors.licensePlate.message}</span>
									</p>
								)}
							</div>
							<div className='add-vehicle-form-item-container'>
								<label htmlFor='date' className='add-vehicle-form__label'>
									Fecha M.
								</label>
								<input
									type='date'
									className={`add-vehicle-form__input is-date ${
										errors?.date ? 'is-error' : ''
									}`}
									placeholder='Introduce el año de matriculación'
									max={maxDate}
									{...register('date', {
										validate: value => {
											if (value) {
												const today = new Date().getTime();
												const dateSelected = new Date(value).getTime();

												return (
													today > dateSelected ||
													'Introduce una fecha inferior al día de hoy'
												);
											}

											return true;
										},
									})}
								/>
								{errors?.date && (
									<p className='add-vehicle-form__error-message'>
										<MdReport />
										<span>{errors.date.message}</span>
									</p>
								)}
							</div>
						</div>
					</form>
					<footer className='vehicle-modal-card-footer'>
						<button
							onClick={handleCancelClick}
							className='vehicle-modal-card-footer__button'
						>
							Cancelar
						</button>
						<button
							type='submit'
							form='addVehicleForm'
							className='vehicle-modal-card-footer__button is-primary'
						>
							Añadir Vehículo
						</button>
					</footer>
				</div>
			</section>
		</section>
	);
};
