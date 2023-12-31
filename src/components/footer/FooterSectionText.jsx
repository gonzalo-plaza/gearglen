import PropTypes from 'prop-types';

export const FooterSectionText = ({ Icon, text }) => {
	const classNameResult = `footer-section__text ${Icon ? 'has-icon' : ''}`;
	return (
		<p className={classNameResult}>
			{Icon && <Icon className='footer-section__icon' />}
			<span>{text}</span>
		</p>
	);
};

FooterSectionText.propTypes = {
	Icon: PropTypes.func,
	text: PropTypes.string.isRequired,
};
