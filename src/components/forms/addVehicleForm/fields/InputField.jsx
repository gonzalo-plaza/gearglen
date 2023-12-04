import { MdReport } from 'react-icons/md';
import PropTypes from 'prop-types';

export const InputField = ({
	max,
	name,
	type,
	errors,
	register,
	labelValue,
	placeholder,
}) => {
	return (
		<>
			<label htmlFor={name} className='add-vehicle-form__label'>
				{labelValue}
			</label>
			<input
				type={type}
				className={`add-vehicle-form__input ${errors[name] ? 'is-error' : ''}`}
				placeholder={placeholder}
				{...register}
				max={max ?? null}
			/>
			{errors?.[name]?.message && (
				<p className='add-vehicle-form-error-message'>
					<MdReport className='add-vehicle-form-error-message__icons' />
					<span>{errors[name].message}</span>
				</p>
			)}
		</>
	);
};

InputField.propTypes = {
	max: PropTypes.string,
	name: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	errors: PropTypes.object.isRequired,
	register: PropTypes.object.isRequired,
	labelValue: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
};
