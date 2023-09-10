import { useTranslation } from "react-i18next"

export const Studies = () => {
    const [t] = useTranslation('global')

    const studies = [
        /* {
            title: t('NextJS Flex'),
            description: t('Proximamente'),
            image: 'https://res.cloudinary.com/hdsqazxtw/image/upload/v1642799651/WWW/Group_1.jpg',
            certificateLink: '#studies'
        }, */
        {
            title: t('studies.backend-title'),
            description: t('studies.backend-description'),
            image: 'https://res.cloudinary.com/hdsqazxtw/image/upload/v1642799651/WWW/Group_1.jpg',
            certificateLink: '#studies',
            delay: '300'
        },
        {
            title: 'ReactJS',
            description: t('studies.react-description'),
            image: 'https://res.cloudinary.com/hdsqazxtw/image/upload/v1642799651/WWW/Group_1.jpg',
            certificateLink: 'https://www.coderhouse.com/certificados/6350a5b57c3cfc000fa4e97f',
            delay: '450'
        },
        {
            title: 'JavaScript',
            description: t('studies.js-description'),
            image: 'https://res.cloudinary.com/hdsqazxtw/image/upload/v1642799651/WWW/Group_1.jpg',
            certificateLink: 'https://www.coderhouse.com/certificados/632362bc678486000f39609a',
            delay: '600'
        },
        {
            title: t('studies.web-development-title'),
            description: t('studies.web-development-description'),
            image: 'https://res.cloudinary.com/hdsqazxtw/image/upload/v1642799651/WWW/Group_1.jpg',
            certificateLink: 'https://www.coderhouse.com/certificados/62c0bbeb5e6c940024b1d55a',
            delay: '750'
        }
    ]

    return (
        <div id="studies" className="studiesContainer">
            <h2>{t('studies.title')}</h2>
            <div className="studies">
                {
                    studies.map((item, index) =>
                        <a key={index} data-aos='fade-down' data-aos-delay={item.delay} 
                        data-aos-duration='150' target={item.certificateLink === '#studies' ? '' : '_blank'} rel="noreferrer" href={item.certificateLink} className="studie">
                            <img src={item.image} alt={item.title} />   
                            <div>
                                <span>{item.title}</span>
                                <p>{item.description}</p>
                            </div>
                        </a>
                    )
                }
            </div>
        </div>
    )
}
