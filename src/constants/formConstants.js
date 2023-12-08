export const formDefaultValues = {
	defaultValues: {
		type: 'default',
		brand: 'default',
		fuel: 'default',
	},
};

export const basicSelectValidation = {
	validate: value => value !== 'default',
};

export const carNameValidation = vehicles => {
	return {
		required: true,
		maxLength: {
			value: 60,
			message: 'El nombre puede tener un máximo de 60 caractéres',
		},
		validate: value => {
			const vehicleNameMatch = vehicles.find(vehicle => {
				return vehicle.name?.value === value;
			});

			if (vehicleNameMatch) {
				return 'Ya tienes un vehículo con este nombre';
			}

			return true;
		},
	};
};

const licensePlateRegEx =
	/^(([A-Z]{1,3}-?\d{1,6})|([A-Z]{1,2}-?\d{4}-?[A-Z]{1,2})|\d{4}[BCDFGHJKLMNPRSTVWXYZ]{3}|[A-Z]\d{4}[A-Z]{3})$/;

export const licensePlateValidation = vehicles => {
	return {
		pattern: {
			value: licensePlateRegEx,
			message: 'Introduce una matrícula correcta (ES)',
		},
		validate: value => {
			const licensePlateMatch = vehicles.find(vehicle => {
				return vehicle.licensePlate?.value === value;
			});

			if (licensePlateMatch) {
				return 'Ya tienes un vehículo con esta matrícula';
			}

			return true;
		},
	};
};

export const kilometersValidation = {
	max: {
		value: 9999999,
		message: 'El valor máximo es 9999999',
	},
};

export const modelValidation = {
	maxLength: {
		value: 60,
		message: 'El modelo puede tener un máximo de 60 caractéres',
	},
};

export const licenseDateValidation = {
	validate: value => {
		if (value) {
			const today = new Date().getTime();
			const dateSelected = new Date(value).getTime();

			return (
				today > dateSelected || 'Introduce una fecha inferior al día de hoy'
			);
		}

		return true;
	},
};

export const vehiclesOptionsArray = [
	{ value: 'car', description: 'Coche' },
	{ value: 'motorbike', description: 'Moto' },
	{ value: 'truck', description: 'Camión' },
];

export const fuelOptionsArray = [
	{ value: 'Gasolina', description: 'Gasolina' },
	{ value: 'Diesel', description: 'Diesel' },
	{ value: 'Eléctrico', description: 'Eléctrico' },
	{ value: 'Híbrido', description: 'Híbrido' },
];

export const brandsOptionsArray = [
	{ value: 'Aprilia', description: 'Aprilia' },
	{ value: 'Audi', description: 'Audi' },
	{ value: 'BMW', description: 'BMW' },
	{ value: 'Citroën', description: 'Citroën' },
	{ value: 'Dacia', description: 'Dacia' },
	{ value: 'DAF', description: 'DAF' },
	{ value: 'Ducati', description: 'Ducati' },
	{ value: 'Fiat', description: 'Fiat' },
	{ value: 'Ford', description: 'Ford' },
	{ value: 'Honda', description: 'Honda' },
	{ value: 'Hyundai', description: 'Hyundai' },
	{ value: 'Iveco', description: 'Iveco' },
	{ value: 'Kia', description: 'Kia' },
	{ value: 'KTM', description: 'KTM' },
	{ value: 'KYMCO', description: 'KYMCO' },
	{ value: 'Mercedes', description: 'Mercedes' },
	{ value: 'Mitsubishi', description: 'Mitsubishi' },
	{ value: 'Opel', description: 'Opel' },
	{ value: 'Peugeot', description: 'Peugeot' },
	{ value: 'Piaggio', description: 'Piaggio' },
	{ value: 'Renault', description: 'Renault' },
	{ value: 'Scania', description: 'Scania' },
	{ value: 'Seat', description: 'Seat' },
	{ value: 'Skoda', description: 'Skoda' },
	{ value: 'Suzuki', description: 'Suzuki' },
	{ value: 'SYM', description: 'SYM' },
	{ value: 'Tesla', description: 'Tesla' },
	{ value: 'Toyota', description: 'Toyota' },
	{ value: 'Vespa', description: 'Vespa' },
	{ value: 'Volkswagen', description: 'Volkswagen' },
	{ value: 'Volvo', description: 'Volvo' },
	{ value: 'Wottan', description: 'Wottan' },
	{ value: 'Yamaha', description: 'Yamaha' },
	{ value: 'Otro', description: 'Otro' },
];
