export const InfoCard = ({ src, desktopSrc, alt, title, description }) => {
  return (
    <article className='info-card'>
      <picture className="info-card-picture">
        <source srcset={desktopSrc} media="(min-width: 1024px)" />
        <img className='info-card-picture__img' src={src} alt={alt} />
      </picture>
      <div className='info-card-description'>
        <h2 className='info-card-description__title'>{title}</h2>
        <p className='info-card-description__text'>{description}</p>
      </div>
    </article>
  )
}