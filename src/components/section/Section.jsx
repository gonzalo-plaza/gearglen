import PropTypes from 'prop-types';

export const Section = ({ children, title, img, mobileImg, description }) => {
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
				<picture className='section-description__img'>
					<source srcSet={img} media='(min-width: 1024px)' />
					<img src={mobileImg} alt={img} />
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
	children: PropTypes.any,
	title: PropTypes.string,
	img: PropTypes.string,
	mobileImg: PropTypes.string,
	description: PropTypes.string,
};
