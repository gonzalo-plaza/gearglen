export const Section = ({ children, title, img, description }) => {
    const hasDescriptionClass = description ? 'has-description' : 'has-no-description';
    return (
        <section className='section'>
            <header className='section-header'>
                <h1 className='section-header-title'>
                    {title}
                    <span className='section-header-title__line'></span>
                </h1>
            </header>
            <div className={`section-description ${hasDescriptionClass}`}>
                <img className='section-description__img' src={img} />
                {description && <p className='section-description__text'>{description}</p>}
            </div>
            {children}
        </section>
    )
}