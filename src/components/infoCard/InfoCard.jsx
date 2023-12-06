// Styles
import './infoCard.scss';

import PropTypes from 'prop-types';

export const InfoCard = ({ src, desktopSrc, alt, title, description }) => {
	return (
		<article className='info-card'>
			<picture className='info-card-picture'>
				<source
					srcSet={desktopSrc}
					width='900'
					height='600'
					media='(min-width: 1024px)'
				/>

				<img
					className='info-card-picture__img'
					width='220'
					height='220'
					src={src}
					alt={alt}
				/>
			</picture>
			<div className='info-card-description'>
				<h2 className='info-card-description__title'>{title}</h2>
				<p className='info-card-description__text'>{description}</p>
			</div>
		</article>
	);
};

InfoCard.propTypes = {
	src: PropTypes.string.isRequired,
	desktopSrc: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
};
