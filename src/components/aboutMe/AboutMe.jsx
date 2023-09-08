import DownloadIcon from '@mui/icons-material/Download';
import { useTranslation } from "react-i18next"

export const AboutMe = () => {
    const [t] = useTranslation('global')

    return (
    <div id="about-me" className="aboutMeContainer">
        <img data-aos='fade-right' data-aos-duration='800' src="https://firebasestorage.googleapis.com/v0/b/felix-73c38.appspot.com/o/WhatsApp%20Image%202023-06-16%20at%2017.26.31.jpeg?alt=media&token=d62ecbe9-e08e-496f-bbc6-5b6bd1b1153d" alt="Alejo Feas Matej" />
        <div data-aos='fade-left' data-aos-duration='800' className='infoContainer'>
            <h3>{t('about-me.title')}</h3>
            <p>{t('about-me.p1')}</p>
            <p>{t('about-me.p2')}</p>
            <a href='CV-Alejo-Feas-Matej.pdf' download="CV-Alejo-Feas-Matej.pdf"><DownloadIcon/>{t('about-me.download')}</a>
        </div>
    </div>
    )
}
