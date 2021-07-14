import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { ThemeProvider } from '@material-ui/core/styles';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import Footer from "../Footer"
import Header from '../Header'
import { useStyles, theme } from './style'
const Layout = ({ children }) => {
    const [effect, setEffect] = useState(false)
    useEffect(() => {
        window.scrollTo(0, 0)
        setTimeout(() => {
            setEffect(true)
        }, 30);
    }, [])
    const { i18n } = useTranslation();
    const classes = useStyles(effect)();

    document.body.dir = i18n.dir();
     return (
        <div >
            <ThemeProvider theme={theme}>
                <Header />
                <div className={classes.root} >
                    {children}
                    <div className={classes.WhatsAppIconWrapper}>
                        <a href="https://wa.me/+971501514410" target="_blank" rel="noreferrer">
                            <WhatsAppIcon className={classes.WhatsAppIcon} />
                        </a>
                    </div>
                    <Footer />
                </div>
            </ThemeProvider>
        </div>
    )
}
export default Layout