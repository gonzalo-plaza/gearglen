export const InfoCard = ({src,alt, title, description}) => {
    return(
        <section className='info-card'>
        <img src={src} alt={alt} />
        <div className='info-card-description'>
          <h2 className='info-card-description__img'>{title}</h2>
          <p className='info-card-description__text'>{description}</p>
        </div>
      </section>
    )
}