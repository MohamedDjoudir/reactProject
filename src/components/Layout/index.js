import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { ThemeProvider } from '@material-ui/core/styles';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import Footer from "../Footer"
import Header from '../Header'
import { theme } from './styleSetting'
import classes from './Layout.module.scss'
import { StylesProvider } from "@material-ui/core/styles"

const Layout = ({ children }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
        window.history.scrollRestoration = 'manual';

    }, [])

    const { i18n } = useTranslation();
    document.body.dir = i18n.dir();
    return (
        <div >
            <StylesProvider injectFirst >
                <ThemeProvider theme={theme} >
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
            </StylesProvider>
        </div>
    )
}
export default Layout