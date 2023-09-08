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
            certificateLink: '#studies'
        },
        {
            title: 'ReactJS',
            description: t('studies.react-description'),
            image: 'https://res.cloudinary.com/hdsqazxtw/image/upload/v1642799651/WWW/Group_1.jpg',
            certificateLink: 'https://www.coderhouse.com/certificados/6350a5b57c3cfc000fa4e97f'
        },
        {
            title: 'JavaScript',
            description: t('studies.js-description'),
            image: 'https://res.cloudinary.com/hdsqazxtw/image/upload/v1642799651/WWW/Group_1.jpg',
            certificateLink: 'https://www.coderhouse.com/certificados/632362bc678486000f39609a'
        },
        {
            title: t('studies.web-development-title'),
            description: t('studies.web-development-description'),
            image: 'https://res.cloudinary.com/hdsqazxtw/image/upload/v1642799651/WWW/Group_1.jpg',
            certificateLink: 'https://www.coderhouse.com/certificados/62c0bbeb5e6c940024b1d55a'
        }
    ]

    return (
        <div id="studies" className="studiesContainer">
            <h3>{t('studies.title')}</h3>
            <div className="studies">
                {
                    studies.map(item =>
                        <a target={item.certificateLink === '#studies' ? '' : '_blank'} rel="noreferrer" href={item.certificateLink} className="studie">
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
