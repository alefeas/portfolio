import { useTranslation } from "react-i18next"

export const Skills = () => {
    const [t] = useTranslation('global')

    const skills = [
        {
            title: 'ReactJS',
            image: 'https://copm.s3.amazonaws.com/d75f74f6.png',
            href: 'https://react.dev/',
            delay: '200'
        }, 
        {
            title: 'JavaScript',
            image: 'https://cdn.hackr.io/uploads/topics/14855893392sgTIhmLQS.png',
            href: 'https://www.javascript.com/',
            delay: '250'
        }, 
        {
            title: 'HTML5',
            image: 'https://wwwhatsnew.com/wp-content/uploads/2013/10/html5.png',
            href: 'https://html.spec.whatwg.org/multipage/',
            delay: '300'
        }, 
        {
            title: 'CSS3',
            image: 'https://www.adaweb.es/wp-content/uploads/2022/05/logotipo_css-min.png',
            href: 'https://www.w3.org/Style/CSS/Overview.en.html',
            delay: '350'
        }, 
        {
            title: 'SASS',
            image: 'https://avatars.githubusercontent.com/u/317889?s=200&v=4',
            href: 'https://sass-lang.com/',
            delay: '400'
        }, 
        {
            title: 'Axios',
            image: 'https://avatars.githubusercontent.com/u/32372333?s=200&v=4',
            href: 'https://axios-http.com/',
            delay: '450'
        }, 
        {
            title: 'Firebase',
            image: 'https://d226aj4ao1t61q.cloudfront.net/firebase_44b31b544b9ca3c736788200b4fd120d.png',
            href: 'https://firebase.google.com',
            delay: '500'
        }, 
        {
            title: 'Git',
            image: 'https://avatars.githubusercontent.com/u/18133?s=200&v=4',
            href: 'https://git-scm.com/',
            delay: '550'
        }, 
        {
            title: 'GitHub',
            image: 'https://elionshops.com/images/uploads/github.png',
            href: 'https://github.com/',
            delay: '600'
        }, 
        {
            title: 'NodeJS',
            image: 'https://lineadecodigo.com/wp-content/uploads/2015/05/nodejs-200.png',
            href: 'https://nodejs.org',
            delay: '650'
        }, 
        {
            title: 'MUI',
            image: 'https://www.frontendmag.com/wp-content/uploads/2023/01/material-ui-300x300.png',
            href: 'https://mui.com/',
            delay: '700'
        }, 
        {
            title: 'Bootstrap',
            image: 'https://seeklogo.com/images/B/bootstrap-logo-3C30FB2A16-seeklogo.com.png',
            href: 'https://getbootstrap.com/',
            delay: '750'
        }, 
        {
            title: 'React Bootstrap',
            image: 'https://qph.cf2.quoracdn.net/main-qimg-a1cba7ee0601b2ea0bd44d7900e23cc8',
            href: 'https://react-bootstrap.netlify.app/',
            delay: '800'
        }, 
        {
            title: 'MongoDB',
            image: 'https://lineadecodigo.com/wp-content/uploads/2014/04/mongodb.png',
            href: 'https://www.mongodb.com',
            delay: '850'
        }, 
        {
            title: 'Express',
            image: 'https://i0.wp.com/actionsys.com.br/wp-content/uploads/2021/06/express-1.png',
            href: 'https://expressjs.com',
            delay: '900'
        }, 
    ]
    
    return (
        <div id="skills" className="skillsContainer">
            <h2>{t('skills.title')}</h2>
            <div className="skills">
                {skills.map((item, index) =>
                    <a key={index} data-aos='flip-left' data-aos-duration='300' data-aos-delay={item.delay} target="_blank" rel='noreferrer' href={item.href}>
                        <div className="imgContainer">
                        <img src={item.image} alt={item.title} />
                        </div>
                        <span>{item.title}</span>
                    </a>    
                )}
            </div>
        </div>
    )
}
