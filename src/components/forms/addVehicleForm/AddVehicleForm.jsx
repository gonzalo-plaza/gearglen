import { useForm } from 'react-hook-form';
import { useVehiclesStore } from '../../../store/vehiclesStore';
import { useVehicleModalStore } from '../../../store/vehicleModalStore';
import { MdReport } from 'react-icons/md';

export const AddVehicleForm = () => {
	const { hideVehicleModal } = useVehicleModalStore();
	const { vehicles, addVehicle } = useVehiclesStore();
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		defaultValues: {
			type: 'default',
			brand: 'default',
		},
	});

	const onSubmit = handleSubmit(data => {
		const formResult = structuredClone(data);
		const vehicleId = vehicles.length;
		formResult.id = vehicleId;
		addVehicle(formResult);
		hideVehicleModal();
		reset();
	});

	const getMaxDate = () => {
		const today = new Date();
		const day = today.getDate().toString().padStart(2, '0');
		const month = (today.getMonth() + 1).toString().padStart(2, '0');
		const year = today.getFullYear();

		return `${year}-${month}-${day}`;
	};

	const maxDate = getMaxDate();

	const handleCancelClick = () => {
		hideVehicleModal();
		reset();
	};
	return (
		<>
			<form
				id='addVehicleForm'
				className='add-vehicle-form'
				onSubmit={onSubmit}
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
							required: true,
							validate: value => {
								const test = vehicles.find(vehicle => {
									return vehicle.name === value;
								});

								if (test) {
									return 'Ya tienes un vehículo con este nombre';
								}

								return true;
							},
						})}
					/>
					{errors?.name?.message && (
						<p className='add-vehicle-form-error-message'>
							<MdReport className='add-vehicle-form-error-message__icons' />
							<span>{errors.name.message}</span>
						</p>
					)}
				</div>
				<div className='add-vehicle-form-input-group'>
					<div className='add-vehicle-form-item-container'>
						<label htmlFor='type' className='add-vehicle-form__label'>
							Vehículo
						</label>
						<select
							name='type'
							id='type'
							className={`add-vehicle-form__select ${
								errors?.type ? 'is-error' : ''
							}`}
							{...register('type', {
								validate: value => value !== 'default',
							})}
						>
							<option value='default' disabled>
								Selecciona un tipo de vehículo
							</option>
							<option value='car'>Coche</option>
							<option value='motorcicle'>Moto</option>
							<option value='truck'>Camión</option>
						</select>
					</div>
					<div className='add-vehicle-form-item-container grow-1'>
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
					<div className='add-vehicle-form-item-container'>
						<label htmlFor='brand' className='add-vehicle-form__label'>
							Marca
						</label>
						<select
							id='brand'
							className={`add-vehicle-form__select ${
								errors?.brand ? 'is-error' : ''
							}`}
							{...register('brand', {
								validate: value => value !== 'default',
							})}
						>
							<option value='default' disabled>
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
						<label htmlFor='licensePlate' className='add-vehicle-form__label'>
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
							<p className='add-vehicle-form-error-message'>
								<MdReport className='add-vehicle-form-error-message__icon' />
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
							<p className='add-vehicle-form-error-message'>
								<MdReport className='add-vehicle-form-error-message__icon' />
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
		</>
	);
};
