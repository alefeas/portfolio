import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Box from '@mui/material/Box';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export const NavBar = () => {
    const [openSideBar, setOpenSideBar] = useState(false);

    const handleDrawerOpen = () => {
        setOpenSideBar(true);
    };

    const handleDrawerClose = () => {
        setOpenSideBar(false);
    };

    const [t, i18n] = useTranslation('global')
    const [image, setImage] = useState('https://cdn-icons-png.flaticon.com/512/3909/3909136.png')
    const [color, setColor] = useState(false)
    
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [isRotated, setIsRotated] = useState(false);
    const changeButton = () => {
        setIsRotated(!isRotated);
        if (i18n.language === 'es') {
            i18n.changeLanguage('en')
            setImage('https://vectorflags.s3.amazonaws.com/flags/es-circle-01.png')
        } else {
            i18n.changeLanguage('es')
            setImage('https://cdn-icons-png.flaticon.com/512/3909/3909136.png')
        }
    }

    const changeColor = () => {
        if (window.scrollY > 150) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

    return (
        <header className={color ? 'navColor' : ''}>
            <nav>
                <div className='imageMenuContainer'>
                    <img className={`rotate-image ${isRotated ? 'rotate' : ''}`} onClick={changeButton} src={image} alt={i18n.language}/>
                    <Box className='sideBarContainer'>
                        <CssBaseline />
                                <MenuIcon className='menuIcon' onClick={handleDrawerOpen} sx={{ ...(open && { display: 'none' }) }}/>
                        <Drawer
                            className='asd'
                            variant="persistent"
                            anchor="left"
                            open={openSideBar}
                        >
                            <button onClick={handleDrawerClose}>
                                <CloseIcon className='closeIcon' />
                            </button>
                            <List className='listSideBar'>
                                <ListItem><a href="#home" onClick={handleDrawerClose}><ListItemText primary={t('nav.home')} /></a></ListItem>
                                <ListItem><a href="#about-me" onClick={handleDrawerClose}><ListItemText primary={t('nav.about-me')} /></a></ListItem>
                                <ListItem> <a href="#my-projects" onClick={handleDrawerClose}><ListItemText primary={t('nav.my-projects')} /></a></ListItem>
                                <ListItem><a href="#skills" onClick={handleDrawerClose}><ListItemText primary={t('nav.skills')} /></a></ListItem>
                                <ListItem><a href="#studies" onClick={handleDrawerClose}><ListItemText primary={t('nav.studies')} /></a></ListItem>
                            </List>
                        </Drawer>
                        </Box>
                </div>
                <ul>
                    <li><a href='#home'>{t('nav.home')}</a></li>
                    <li><a href='#about-me'>{t('nav.about-me')}</a></li>
                    <li><a href='#my-projects'>{t('nav.my-projects')}</a></li>
                    <li><a href='#skills'>{t('nav.skills')}</a></li>
                    <li><a href='#studies'>{t('nav.studies')}</a></li>
                </ul>
                <button className='contactButton' onClick={handleOpen}>{t('nav.contact-me')}</button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box className="boxModal">
                    <div className='titleButtonContainer'>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            {t('nav.contact-title')}
                        </Typography>
                        <button onClick={handleClose}><CloseIcon/></button>
                    </div>
                    <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/afeas/">
                        <div className='contactContainer'>
                            <LinkedInIcon className='linkedinIcon icon'/>
                            <span>Alejo Feas Matej</span>
                        </div>
                    </a>
                    <a target="_blank" rel='noreferrer' href="https://wa.me/+541166282804">
                        <div className='contactContainer'>
                            <WhatsAppIcon className='whatsAppIcon icon'/>
                            <span>+54 11 6628-2804</span>
                        </div>
                    </a>
                    <a target="_blank" rel='noreferrer' href="mailto:alefeas99@gmail.com">
                        <div className='contactContainer'>
                            <EmailIcon className='emailIcon icon'/>
                            <span>alefeas99@gmail.com</span>
                        </div>
                    </a>
                    </Box>
                </Modal>
            </nav>
        </header>
    )
}