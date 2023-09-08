import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import { useTranslation } from 'react-i18next';

export const MyProjects = () => {
    const [t] = useTranslation('global')

    const projects = [
        {
            title: 'Felix',
            description: t('my-projects.felix-description'),
            image: 'https://firebasestorage.googleapis.com/v0/b/felix-73c38.appspot.com/o/Captura%20de%20pantalla%20(934).png?alt=media&token=d8902994-edd2-4759-995c-c849ff4e05d0',
            githubLink: 'https://github.com/alefeas/felix-movies.git',
            projectLink: 'https://felix1.netlify.app/',
            side: 'left'
        },
        {
            title: 'Trivia App',
            description: t('my-projects.trivia-app-description'),
            image: 'https://firebasestorage.googleapis.com/v0/b/felix-73c38.appspot.com/o/coverImageREADME.png?alt=media&token=3c81e8e9-b15b-433e-bca5-b1652bc40640',
            githubLink: 'https://github.com/alefeas/trivia-app.git',
            projectLink: 'https://trivia-app1.netlify.app/',
            side: 'right'
        },
        {
            title: 'Fitness Shop',
            description: t('my-projects.fitness-shop-description'),
            image: 'https://firebasestorage.googleapis.com/v0/b/felix-73c38.appspot.com/o/Captura%20de%20pantalla%20(936).png?alt=media&token=d96d6cd9-ac1c-4c54-a667-4993f3248af7',
            githubLink: 'https://github.com/alefeas/fitness-shop.git',
            projectLink: 'https://fitness-shop1.netlify.app/',
            side: 'left'
        },
        {
            title: 'Panthera Clothes',
            description: t('my-projects.panthera-clothes-description'),
            image: 'https://firebasestorage.googleapis.com/v0/b/felix-73c38.appspot.com/o/Captura%20de%20pantalla%20(937).png?alt=media&token=70ab8602-32dd-4b6e-ab8e-51ac5bd370e6',
            githubLink: 'https://github.com/alefeas/panthera-clothes.git',
            projectLink: 'https://alefeas.github.io/panthera-clothes/',
            side: 'right'
        },
        {
            title: t('my-projects.rick-and-morty-wiki-title'),
            description: t('my-projects.rick-and-morty-wiki-description'),
            image: 'https://firebasestorage.googleapis.com/v0/b/felix-73c38.appspot.com/o/imagen-readme-wiki-rick-and-morty.png?alt=media&token=5f47626c-90ed-4df3-ae3a-25c53ab06557',
            githubLink: 'https://github.com/alefeas/rick-and-morty-wiki.git',
            projectLink: 'https://rick-and-morty-wiki1.netlify.app/',
            side: 'left'
        },
        {
            title: 'Weather App',
            description: t('my-projects.weather-app-description'),
            image: 'https://firebasestorage.googleapis.com/v0/b/felix-73c38.appspot.com/o/Captura%20de%20pantalla%20(944).png?alt=media&token=6067c400-a144-4f2e-9bd8-596faaeab233',
            githubLink: 'https://github.com/alefeas/weather-app.git',
            projectLink: 'https://weather-app-8.netlify.app/',
            side: 'right'
        },
        {
            title: t('my-projects.hangman-title'),
            description: t('my-projects.hangman-description'),
            image: 'https://firebasestorage.googleapis.com/v0/b/felix-73c38.appspot.com/o/imagen-readme-hangman.png?alt=media&token=4db3b4e4-7793-4dc3-b2bf-b86ba1968aac',
            githubLink: 'https://github.com/alefeas/hangman.git',
            projectLink: 'https://hangman12.netlify.app/',
            side: 'left'
        },
        {
            title: 'Carajo',
            description: t('my-projects.carajo-description'),
            image: 'https://firebasestorage.googleapis.com/v0/b/felix-73c38.appspot.com/o/Captura%20de%20pantalla%20(938).png?alt=media&token=489056db-5dbf-4f21-bef8-1dfba95ce2aa',
            githubLink: 'https://github.com/alefeas/carajo-banda',
            projectLink: 'https://carajo.netlify.app/',
            side: 'right'
        },
        {
            title: 'Tic Tac Toe',
            description: t('my-projects.tic-tac-toe-description'),
            image: 'https://firebasestorage.googleapis.com/v0/b/felix-73c38.appspot.com/o/Captura%20de%20pantalla%20(948).png?alt=media&token=18fef89c-e9f0-4dee-b896-e49f64efd6f5',
            githubLink: 'https://github.com/alefeas/tic-tac-toe.git',
            projectLink: 'https://tic-tac-toe-100.netlify.app/',
            side: 'left'
        }
    ]

    return (
        <div id="my-projects" className="projectsSectionContainer">
            <h3>{t('my-projects.title')}</h3>
            <div className='projectsContainer'>
                {
                    projects.map(item =>
                        <div data-aos={item.side === 'left' ? 'fade-right' : 'fade-left'} data-aos-duration='800' className="projectContainer">
                            <a className="imageLink" href={item.projectLink} target='_blank' rel='noreferrer'>
                            <img src={item.image} alt={item.title} />
                            </a>
                            <div>
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                            <div>
                                <a target='_blank' rel='noreferrer' href={item.githubLink}><GitHubIcon/></a>
                                <a target='_blank' rel='noreferrer' href={item.projectLink}><LinkIcon/></a>
                            </div>
                            </div>
                        </div>    
                    )
                }
            </div>
        </div>
    )
}
