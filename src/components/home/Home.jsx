import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { useTranslation } from 'react-i18next';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

export const Home = () => {
    const [t] = useTranslation('global')
    const [text] = useTypewriter({
        words: [t('home.title')],
        typeSpeed: 80,
        deleteSpeed: 40,
        loop: {}
    })

    return (
        <div id="home" className="home">
            <div>
                <h1>ALEJO FEAS MATEJ</h1>
                <span>{text}<Cursor/></span>
                <div className="buttonHomeContainer">
                    <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/afeas/"><button><LinkedInIcon/></button></a>
                    <a target="_blank" rel='noreferrer' href="https://github.com/alefeas"><button><GitHubIcon/></button></a>
                    <a href="mailto:alefeas@gmail.com"><button><EmailIcon/></button></a>
                </div>
            </div>
        </div>
    )
}
