import { useTranslation } from "react-i18next"

export const Studies = () => {
    const [t] = useTranslation('global')

    const studies = [
        {
            title: t('studies.backend-title'),
            description: t('studies.backend-description'),
            image: 'https://res.cloudinary.com/hdsqazxtw/image/upload/v1642799651/WWW/Group_1.jpg'
        },
        {
            title: 'ReactJS',
            description: t('studies.react-description'),
            image: 'https://res.cloudinary.com/hdsqazxtw/image/upload/v1642799651/WWW/Group_1.jpg'
        },
        {
            title: 'JavaScript',
            description: t('studies.js-description'),
            image: 'https://res.cloudinary.com/hdsqazxtw/image/upload/v1642799651/WWW/Group_1.jpg'
        },
        {
            title: t('studies.web-development-title'),
            description: t('studies.web-development-description'),
            image: 'https://res.cloudinary.com/hdsqazxtw/image/upload/v1642799651/WWW/Group_1.jpg'
        }
    ]

    return (
        <div id="studies" className="studiesContainer">
            <h3>{t('studies.title')}</h3>
            <div className="studies">
                {
                    studies.map(item =>
                        <div className="studie">
                            <img src={item.image} alt={item.title} />
                            <div>
                                <span>{item.title}</span>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
