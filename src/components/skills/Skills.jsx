import { useTranslation } from "react-i18next"

export const Skills = () => {
    const [t] = useTranslation('global')

    const skills = [
        {
            title: 'ReactJS',
            image: 'https://copm.s3.amazonaws.com/d75f74f6.png'
        }, 
        {
            title: 'JavaScript',
            image: 'https://cdn.hackr.io/uploads/topics/14855893392sgTIhmLQS.png'
        }, 
        {
            title: 'HTML5',
            image: 'https://wwwhatsnew.com/wp-content/uploads/2013/10/html5.png'
        }, 
        {
            title: 'CSS3',
            image: 'https://www.adaweb.es/wp-content/uploads/2022/05/logotipo_css-min.png'
        }, 
        {
            title: 'SASS',
            image: 'https://avatars.githubusercontent.com/u/317889?s=200&v=4'
        }, 
        {
            title: 'Firebase',
            image: 'https://d226aj4ao1t61q.cloudfront.net/firebase_44b31b544b9ca3c736788200b4fd120d.png'
        }, 
        {
            title: 'Git',
            image: 'https://avatars.githubusercontent.com/u/18133?s=200&v=4'
        }, 
        {
            title: 'GitHub',
            image: 'https://elionshops.com/images/uploads/github.png'
        }, 
        {
            title: 'NodeJS',
            image: 'https://lineadecodigo.com/wp-content/uploads/2015/05/nodejs-200.png'
        }, 
        {
            title: 'MUI',
            image: 'https://www.frontendmag.com/wp-content/uploads/2023/01/material-ui-300x300.png'
        }, 
        {
            title: 'Bootstrap',
            image: 'https://seeklogo.com/images/B/bootstrap-logo-3C30FB2A16-seeklogo.com.png'
        }, 
        {
            title: 'React Bootstrap',
            image: 'https://qph.cf2.quoracdn.net/main-qimg-a1cba7ee0601b2ea0bd44d7900e23cc8'
        }, 
        {
            title: 'MongoDB',
            image: 'https://lineadecodigo.com/wp-content/uploads/2014/04/mongodb.png'
        }, 
        {
            title: 'Express',
            image: 'https://i0.wp.com/actionsys.com.br/wp-content/uploads/2021/06/express-1.png'
        }, 
    ]
    
    return (
        <div id="skills" className="skillsContainer">
            <h3>{t('skills.title')}</h3>
            <div className="skills">
                {skills.map(item =>
                    <div>
                        <div className="imgContainer">
                        <img src={item.image} alt={item.title} />
                        </div>
                        <span>{item.title}</span>
                    </div>    
                )}
            </div>
        </div>
    )
}
