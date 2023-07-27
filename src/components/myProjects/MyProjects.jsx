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
            projectLink: 'https://felix1.netlify.app/'
        },
        {
            title: 'Fitness Shop',
            description: t('my-projects.fitness-shop-description'),
            image: 'https://firebasestorage.googleapis.com/v0/b/felix-73c38.appspot.com/o/Captura%20de%20pantalla%20(936).png?alt=media&token=d96d6cd9-ac1c-4c54-a667-4993f3248af7',
            githubLink: 'https://github.com/alefeas/fitness-shop.git',
            projectLink: 'https://fitness-shop1.netlify.app/'
        },
        {
            title: 'Panthera Clothes',
            description: t('my-projects.panthera-clothes-description'),
            image: 'https://firebasestorage.googleapis.com/v0/b/felix-73c38.appspot.com/o/Captura%20de%20pantalla%20(937).png?alt=media&token=70ab8602-32dd-4b6e-ab8e-51ac5bd370e6',
            githubLink: 'https://github.com/alefeas/panthera-clothes.git',
            projectLink: 'https://alefeas.github.io/panthera-clothes/'
        },
        {
            title: 'Carajo',
            description: t('my-projects.carajo-description'),
            image: 'https://firebasestorage.googleapis.com/v0/b/felix-73c38.appspot.com/o/Captura%20de%20pantalla%20(938).png?alt=media&token=489056db-5dbf-4f21-bef8-1dfba95ce2aa',
            githubLink: 'https://github.com/alefeas/carajo-banda',
            projectLink: 'https://carajo.netlify.app/'
        }
    ]

    return (
        <div id="my-projects" className="projectsContainer">
            <h3>{t('my-projects.title')}</h3>
            {
                projects.map(item =>
                    <div className="projectContainer">
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
    )
}
