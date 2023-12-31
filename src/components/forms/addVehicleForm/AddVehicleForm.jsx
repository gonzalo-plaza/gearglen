import { useForm } from 'react-hook-form';
import { useVehiclesStore } from '../../../store/vehiclesStore';
import { useVehicleModalStore } from '../../../store/vehicleModalStore';
import {
	generateVehicleObject,
	getMaxDate,
} from '../../../helpers/formHelpers';
import {
	modelValidation,
	fuelOptionsArray,
	formDefaultValues,
	carNameValidation,
	brandsOptionsArray,
	kilometersValidation,
	vehiclesOptionsArray,
	licenseDateValidation,
	basicSelectValidation,
	licensePlateValidation,
} from '../../../constants/formConstants';
import { InputField } from './fields/InputField';
import { SelectField } from './fields/SelectField';

const AddVehicleForm = () => {
	const { hideVehicleModal } = useVehicleModalStore();
	const { vehicles, addVehicle } = useVehiclesStore();
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm(formDefaultValues);

	const onSubmit = handleSubmit(formValues => {
		const vehicleObject = generateVehicleObject({
			formValues,
			vehiclesLength: vehicles.length,
		});
		addVehicle(vehicleObject);
		hideVehicleModal();
		reset();
	});

	const handleCancelClick = () => {
		hideVehicleModal();
		reset();
	};

	const maxDate = getMaxDate();
	return (
		<>
			<form
				id='addVehicleForm'
				className='add-vehicle-form'
				onSubmit={onSubmit}
			>
				<div className='add-vehicle-form-input-group'>
					<div className='add-vehicle-form-item-container grow-1'>
						<InputField
							labelValue='Nombre del vehículo *'
							type='text'
							errors={errors}
							maxLength='60'
							register={register('name', carNameValidation(vehicles))}
							placeholder='Introduce el nombre de tu vehículo'
							name='name'
						/>
					</div>
					<div className='add-vehicle-form-item-container'>
						<SelectField
							labelValue='Vehículo *'
							selectName='type'
							errors={errors}
							register={register('type', basicSelectValidation)}
							optionDefaultValue='Selecciona un tipo de vehículo'
							optionsArray={vehiclesOptionsArray}
						/>
					</div>
				</div>
				<div className='add-vehicle-form-input-group'>
					<div className='add-vehicle-form-item-container grow-1'>
						<InputField
							type='number'
							labelValue='Kilómetros'
							errors={errors}
							placeholder='Introduce los kilómetros'
							register={register('kilometers', kilometersValidation)}
							name='kilometers'
							max='9999999'
						/>
					</div>
					<div className='add-vehicle-form-item-container'>
						<SelectField
							labelValue='Combustible *'
							selectName='fuel'
							errors={errors}
							register={register('fuel', basicSelectValidation)}
							optionDefaultValue='Selecciona el combustible'
							optionsArray={fuelOptionsArray}
						/>
					</div>
				</div>
				<div className='add-vehicle-form-input-group'>
					<div className='add-vehicle-form-item-container'>
						<SelectField
							labelValue='Marca *'
							selectName='brand'
							errors={errors}
							register={register('brand', basicSelectValidation)}
							optionDefaultValue='Selecciona la marca'
							optionsArray={brandsOptionsArray}
						/>
					</div>
					<div className='add-vehicle-form-item-container grow-1'>
						<InputField
							type='text'
							name='model'
							labelValue='Modelo'
							errors={errors}
							placeholder='Introduce el modelo'
							maxLength='60'
							register={register('model', modelValidation)}
						/>
					</div>
				</div>
				<div className='add-vehicle-form-input-group'>
					<div className='add-vehicle-form-item-container grow-1'>
						<InputField
							type='text'
							labelValue='Matrícula'
							name='licensePlate'
							errors={errors}
							placeholder='Introduce la matrícula'
							register={register(
								'licensePlate',
								licensePlateValidation(vehicles),
							)}
						/>
					</div>
					<div className='add-vehicle-form-item-container'>
						<InputField
							type='date'
							name='date'
							labelValue='Fecha M.'
							errors={errors}
							register={register('date', licenseDateValidation)}
							max={maxDate}
						/>
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

export default AddVehicleForm;
