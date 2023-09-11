import DownloadIcon from '@mui/icons-material/Download';
import { useTranslation } from "react-i18next"

export const AboutMe = () => {
    const [t] = useTranslation('global')

    return (
    <div id="about-me" className="aboutMeContainer">
        <div className='imgInfoContainer'>
            <img data-aos='fade-down' data-aos-duration='500' data-aos-offset='150' src="https://i.imgur.com/oBry40X.jpg" alt="Alejo Feas Matej" />
            <div data-aos='fade-down' data-aos-duration='500' data-aos-offset='150' className='infoContainer'>
                <h2>{t('about-me.title')}</h2>
                <p>{t('about-me.p1')}</p>
                <p>{t('about-me.p2')}</p>
                <a href='CV-Alejo-Feas-Matej.pdf' download="CV-Alejo-Feas-Matej.pdf"><DownloadIcon/>{t('about-me.download')}</a>
            </div>
        </div>
    </div>
    )
}
