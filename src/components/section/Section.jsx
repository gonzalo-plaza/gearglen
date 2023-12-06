// Styles
import './section.scss';

import PropTypes from 'prop-types';

export const Section = ({
	img,
	title,
	children,
	imgWidth,
	imgHeight,
	reduceImg,
	altImgText,
	desktopImg,
	description,
	desktopImgWidth,
	desktopImgHeight,
}) => {
	const hasDescriptionClass = description
		? 'has-description'
		: 'has-no-description';
	return (
		<section className='section'>
			<header className='section-header'>
				<h1 className='section-header-title'>
					{title}
					<span className='section-header-title__line'></span>
				</h1>
			</header>
			<div className={`section-description ${hasDescriptionClass}`}>
				<picture className='section-description__picture'>
					<source
						srcSet={desktopImg}
						width={desktopImgWidth}
						height={desktopImgHeight}
						media='(min-width: 1024px)'
					/>
					<img
						className={`section-description__img ${
							reduceImg ? 'is-reduced' : ''
						}`}
						src={img}
						width={imgWidth}
						height={imgHeight}
						alt={altImgText}
					/>
				</picture>
				{description && (
					<p className='section-description__text'>{description}</p>
				)}
			</div>
			{children}
		</section>
	);
};

Section.propTypes = {
	img: PropTypes.string,
	title: PropTypes.string,
	children: PropTypes.any,
	imgWidth: PropTypes.string,
	imgHeight: PropTypes.string,
	reduceImg: PropTypes.string,
	altImgText: PropTypes.string,
	desktopImg: PropTypes.string,
	description: PropTypes.string,
	desktopImgWidth: PropTypes.string,
	desktopImgHeight: PropTypes.string,
};
