import GitHubIcon from '@mui/icons-material/GitHub';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
    const [t] = useTranslation('global')

    return (
        <footer>
            <span>Copyright © {t('footer.copyright')}</span>
            <div>
                <span>{t('footer.credits')} </span>
                <a target='_blank' rel='noreferrer' href="https://github.com/alefeas"><GitHubIcon className='githubIcon'/></a>
            </div>
        </footer>
    )
}
