import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export const MyProjects = () => {
    const [t] = useTranslation('global')

    const projects = [
        {
            title: 'Nutri Secret',
            description: t('my-projects.nutri-secret-description'),
            image: 'https://i.imgur.com/VQU8KCv.png',
            githubLink: 'https://github.com/alefeas/nutri-secret.git',
            projectLink: 'https://nutri-secret.netlify.app/',
            side: 'left'
        },
        {
            title: 'Felix',
            description: t('my-projects.felix-description'),
            image: 'https://i.imgur.com/GDDRjR2.png',
            githubLink: 'https://github.com/alefeas/felix-movies.git',
            projectLink: 'https://felix1.netlify.app/',
            side: 'left'
        },
        {
            title: 'Trivia App',
            description: t('my-projects.trivia-app-description'),
            image: 'https://i.imgur.com/nc0916S.png',
            githubLink: 'https://github.com/alefeas/trivia-app.git',
            projectLink: 'https://trivia-app1.netlify.app/',
            side: 'right'
        },
        {
            title: 'Fitness Shop',
            description: t('my-projects.fitness-shop-description'),
            image: 'https://i.imgur.com/u3w3Oi8.png',
            githubLink: 'https://github.com/alefeas/fitness-shop.git',
            projectLink: 'https://fitness-shop1.netlify.app/',
            side: 'left'
        },
        {
            title: t('my-projects.rick-and-morty-wiki-title'),
            description: t('my-projects.rick-and-morty-wiki-description'),
            image: 'https://i.imgur.com/c4uDqxO.png',
            githubLink: 'https://github.com/alefeas/rick-and-morty-wiki.git',
            projectLink: 'https://rick-and-morty-wiki1.netlify.app/',
            side: 'left'
        },
        {
            title: 'Panthera Clothes',
            description: t('my-projects.panthera-clothes-description'),
            image: 'https://i.imgur.com/1PylV4s.png',
            githubLink: 'https://github.com/alefeas/panthera-clothes.git',
            projectLink: 'https://alefeas.github.io/panthera-clothes/',
            side: 'right'
        },
        {
            title: 'Weather App',
            description: t('my-projects.weather-app-description'),
            image: 'https://i.imgur.com/RBlJ0S6.png',
            githubLink: 'https://github.com/alefeas/weather-app.git',
            projectLink: 'https://weather-app-8.netlify.app/',
            side: 'right'
        },
        {
            title: t('my-projects.hangman-title'),
            description: t('my-projects.hangman-description'),
            image: 'https://i.imgur.com/7qwThlW.png',
            githubLink: 'https://github.com/alefeas/hangman.git',
            projectLink: 'https://hangman12.netlify.app/',
            side: 'left'
        },
        {
            title: 'Carajo',
            description: t('my-projects.carajo-description'),
            image: 'https://i.imgur.com/7I8Bguy.png',
            githubLink: 'https://github.com/alefeas/carajo-banda',
            projectLink: 'https://carajo.netlify.app/',
            side: 'right'
        },
        {
            title: 'Tic Tac Toe',
            description: t('my-projects.tic-tac-toe-description'),
            image: 'https://i.imgur.com/7qnXLCC.png',
            githubLink: 'https://github.com/alefeas/tic-tac-toe.git',
            projectLink: 'https://tic-tac-toe-100.netlify.app/',
            side: 'left'
        }
    ]

    const projectsPerPage = 4
    const [limit, setLimit] = useState(0)

    const nextPage = () => {
        setLimit(limit + projectsPerPage)
    }
    const prevPage = () => {
        setLimit(limit - projectsPerPage)
    }

    return (
        <div id="my-projects" className="projectsSectionContainer">
            <h2>{t('my-projects.title')}</h2>
            <div data-aos='fade-zoom' data-aos-duration='500' className='projectsContainer'>
                {
                    projects.slice(0 + limit, projectsPerPage + limit).map((item, index) =>
                        <div key={index} className="projectContainer">
                            <a className="imageLink" href={item.projectLink} aria-label={item.title} target='_blank' rel='noreferrer'>
                                <img src={item.image} alt={item.title} />
                            </a>
                            <div>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <div>
                                    <a target='_blank' rel='noreferrer' href={item.githubLink} aria-label='codeProject'><GitHubIcon/></a>
                                    <a target='_blank' rel='noreferrer' href={item.projectLink} aria-label={item.title}><LinkIcon/></a>
                                </div>
                            </div>
                        </div>    
                    )
                }
            </div>
            <div className='buttonsContainer'>
                {
                    limit === 0 ?
                    <button className='changePageButton disabled'>{t('my-projects.prev-button')}</button>
                    : <a href='#my-projects'><button onClick={prevPage} className='changePageButton'>{t('my-projects.prev-button')}</button></a>
                }
                {
                    limit >= projects.length - projectsPerPage ?
                    <button className='changePageButton disabled'>{t('my-projects.next-button')}</button>
                    : <a href='#my-projects'><button onClick={nextPage} className='changePageButton'>{t('my-projects.next-button')}</button></a>
                }
            </div>
        </div>
    )
}
