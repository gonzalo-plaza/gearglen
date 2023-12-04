/**
 * Processes the values of a vehicle form and returns an object with the processed values.
 *
 * @param formValues - An object containing the values submitted from a vehicle form.
 *
 * @returns The function `processVehicleFormData` is returning an object `formProcessedValues` which
 * contains the processed values of the input form.
 */
const processVehicleFormData = formValues => {
	const formProcessedValues = {};
	for (const key in formValues) {
		if (Object.prototype.hasOwnProperty.call(formValues, key)) {
			const formValue = formValues[key];
			formProcessedValues[key] = processVehicleFormProperty(formValue, key);
		}
	}
	return formProcessedValues;
};

/**
 * Returns an object with a `value` property set to the input value, or 'No añadido' if the input value is falsy, along with a `noAdded` property set to true if
 * the input value is falsy.
 *
 * @param value - The `value` parameter is the input value from a vehicle form property.
 *
 * @returns The function `processVehicleFormProperty` returns an object with a `value` property. If the
 * `value` parameter is truthy, the `value` property will be set to the value of the parameter. If the
 * `value` parameter is falsy, the `value` property will be set to the string `'No añadido'` and an
 * additional property `noAdded` will
 */
const processVehicleFormProperty = value => {
	return value ? { value } : { value: 'No añadido', noAdded: true };
};

/**
 * The function generates a vehicle object by processing form values and assigning a unique ID based on
 * the length of existing vehicles.
 *
 * @returns the vehiclesObject, which is an object generated from processing the formValues.
 */
export const generateVehicleObject = ({ formValues, vehiclesLength }) => {
	const vehiclesObject = processVehicleFormData(formValues);

	// Generate ID using vehicles lenght (provisional solution)
	vehiclesObject.id = { value: vehiclesLength };

	return vehiclesObject;
};

/**
 * The getMaxDate function returns the current date in the format "YYYY-MM-DD".
 * @returns The function `getMaxDate` returns a string in the format "YYYY-MM-DD" representing the
 * current date.
 */
export const getMaxDate = () => {
	const today = new Date();
	const day = today.getDate().toString().padStart(2, '0');
	const month = (today.getMonth() + 1).toString().padStart(2, '0');
	const year = today.getFullYear();

	return `${year}-${month}-${day}`;
};
