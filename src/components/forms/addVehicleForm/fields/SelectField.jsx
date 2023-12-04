import PropTypes from 'prop-types';

export const SelectField = ({
	errors,
	register,
	labelValue,
	selectName,
	optionsArray,
	optionDefaultValue,
}) => {
	return (
		<>
			<label htmlFor={labelValue} className='add-vehicle-form__label'>
				{labelValue}
			</label>
			<select
				className={`add-vehicle-form__select ${
					errors?.[selectName] ? 'is-error' : ''
				}`}
				{...register}
			>
				<option value='default' disabled>
					{optionDefaultValue}
				</option>
				{optionsArray &&
					optionsArray.map(option => {
						return (
							<option key={option.value} value={option.value}>
								{option.description}
							</option>
						);
					})}
			</select>
		</>
	);
};

SelectField.propTypes = {
	errors: PropTypes.object.isRequired,
	register: PropTypes.func.isRequired,
	labelValue: PropTypes.string.isRequired,
	selectName: PropTypes.string.isRequired,
	optionsArray: PropTypes.array.isRequired,
	optionDefaultValue: PropTypes.string,
};
