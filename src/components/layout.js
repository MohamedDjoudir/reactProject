import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import Footer from "./footer"
import Header from './header'
const Layout = ({ children }) => {
    const [effect, setEffect] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setEffect(true)
        }, 30);
    }, [])
    const useStyles = makeStyles({
        root: {
            transition: "all 300ms",
            opacity: effect ? "1" : "0",
            maxWidth: "1400px",
            margin: "0 auto",
            background: "#fff",
            width:"100vw",
            overflow:"hidden"
        },
        WhatsAppIconWrapper: {
            position: "fixed",
            bottom: "6vh",
            right: "5vw",
            zIndex:"5556",
        },
        WhatsAppIcon: {
            fontSize: "clamp(3.5rem,calc(1.5rem + 3vw),4rem)",
            background: "#25d366",
            fill: "white",
            borderRadius: "50%",
            padding: "15px",
            boxShadow: "1px 1.5px 2px rgba(0,0,0,0.3) "
        },
    });
    useEffect(() => {
         window.scrollTo(0, 0)
    }, [])
    const {  i18n } = useTranslation();
    document.body.dir = i18n.dir();
    const theme = createTheme({
        palette: {
            primary: {
                main: "#65c042",
            },
            secondary: {
                main: green[500],
            },
        },
    });
    const classes = useStyles();
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