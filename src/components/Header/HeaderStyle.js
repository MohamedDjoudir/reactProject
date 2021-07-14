import { makeStyles } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';


// classNames

export const useStyles = menu => {
    const { i18n } = useTranslation();
    return makeStyles(theme => {
        return ({
            AppBar: {
                background: '#f6fcfe',
                color: "#4d4d4f",
                boxShadow: "none",
                height: "80px",
                zIndex: "6565"
            },
            Toolbar: {
                height: "80px",
                width: "100%",
                maxWidth: "1400px",
                margin: "0 auto",
                padding: "0 35px 0 25px !important"
            },
            grow: {
                flexGrow: 1,
            },
            logoWrapper: {
                width: "193px",
                cursor: "pointer"
            },
            logo: {
                width: "193px",
            },
            AppBarSpace: {
                height: "80px",
            },
            link: {
                color: "#4d4d4f",
                textDecorationLine: 'none',
                fontFamily: "'Almarai',sans-serif",
            },
            link2: {
                color: "#4d4d4f",
                textDecorationLine: 'none',
                fontFamily: "'Almarai',sans-serif",
            },
            btnVide: {
                opacity: "0",
                minWidth: "4vw"
            },
            btn: {
                textTransform: 'none',
                margin: "5px",
                cursor: "pointer",
                "&:hover": {
                    background: "none",
                },
                "&:active": {
                    background: "none",
                }
            },
            btn2: {
                textTransform: 'none',
                margin: "5px",
                width: "130%",
                cursor: "pointer",

                "&:hover": {
                    background: "none",
                },
                "&:active": {
                    background: "none",
                }
            },
            menu: {
                position: "fixed",
                height: '100vh',
                width: "50vw",
                background: "#fff",
                top: "0",
                overflow: "hidden",
                zIndex: "-1",
                left: (i18n.language !== "ar" && menu) ? 0 : i18n.language !== "ar" ? '-200%' : '',
                right: (i18n.language === "ar" && menu) ? 0 : i18n.language === "ar" ? '-200%' : '',
                transition: "all 700ms cubic-bezier(0.16, 1, 0.3, 1)",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: i18n.language !== "ar" ? "80px 20px 0" : "80px 20px 0",
                display: "none",
                [theme.breakpoints.down('sm')]: {
                    display: "flex"
                },
            },
            menu1: {
                display: "block",
                [theme.breakpoints.down('sm')]: {
                    display: "none"
                },
            },
            menuBG: {
                transition: "all 700ms cubic-bezier(0.16, 1, 0.3, 1)",
                position: "fixed",
                height: '100vh',
                width: "100vw",
                background: "#fff",
                opacity: "0.5",
                top: "0",
                right: menu ? "0" : '-200%',
                zIndex: "-10",
                display: "none",
                [theme.breakpoints.down('sm')]: {
                    display: "block"
                },
            },
            menuList: {
                width: "100%",

                [theme.breakpoints.down('sm')]: {
                },
            },
            menuBtn: {
                fontSize: "35px",
                cursor: "pointer",
                display: "none",
                [theme.breakpoints.down('sm')]: {
                    display: "block"
                },
            },
        })
    });
}