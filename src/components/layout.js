import React, { useEffect } from 'react'
import { useTranslation, withTranslation, Trans } from 'react-i18next';
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

import Header from './header'

const Layout = ({ children }) => {
    const useStyles = makeStyles({
        root: {
            maxWidth: "1400px",
            margin: "0 auto",
            background:"#fcfcfc"
        },

    });
    useEffect(() => {
        //window.scrollTo(0, 0)
    }, [])
    const { t, i18n } = useTranslation();
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
                </div>
            </ThemeProvider>
        </div>

    )
}
export default Layout