export const InfoCard = ({ src, alt, title, description }) => {
  return (
    <article className='info-card'>
      <img src={src} alt={alt} className='info-card__img'/>
      <div className='info-card-description'>
        <h2 className='info-card-description__title'>{title}</h2>
        <p className='info-card-description__text'>{description}</p>
      </div>
    </article>
  )
}