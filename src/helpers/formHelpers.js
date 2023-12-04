/**
 * The function `processVehicleFormData` processes form values and returns an object with processed
 * values.
 * @returns The function `processVehicleFormData` returns an object `formProcessedValues` which
 * contains the processed values of the vehicle form properties.
 */
const processVehicleFormData = formValues => {
    const formProcessedValues = {};
    for (const key in formValues) {
        const formValue = formValues[key];
        formProcessedValues[key] = processVehicleFormProperty(formValue, key);
    }
    return formProcessedValues;
};

/**
 * The function `processVehicleFormProperty` returns an object with a `value` property set to the input
 * value, or 'No añadido' if the input value is falsy, along with a `noAdded` property set to true if
 * the input value is falsy.
 * @param value - The `value` parameter is the input value from a vehicle form property.
 * @returns The function `processVehicleFormProperty` returns an object with a `value` property. If the
 * `value` parameter is truthy, the `value` property will be set to the value of the parameter. If the
 * `value` parameter is falsy, the `value` property will be set to the string `'No añadido'` and an
 * additional property `noAdded` will
 */
const processVehicleFormProperty = (value) => {
    return value ? { value } : { value: 'No añadido', noAdded: true }
}

/**
 * The function generates a vehicle object by processing form values and assigning a unique ID based on
 * the length of existing vehicles.
 * @returns the vehiclesObject, which is an object generated from processing the formValues.
 */
export const generateVehicleObject = ({ formValues, vehiclesLength }) => {
    const vehiclesObject = processVehicleFormData(formValues);

    // Generate ID using vehicles lenght (provisional solution)
    vehiclesObject.id = { value: vehiclesLength }

    return vehiclesObject;
}