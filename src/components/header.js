import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
// M_UI component s
import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
// assets
import Logo from '../assets/logo/logo.png'
export default function ButtonAppBar() {
    const { t, i18n } = useTranslation();

    // component states
    const [isMobile, setIsMobile] = useState(false)
    const [menu, setMenu] = useState(false)

    // mobile screen detecter
    const handleResize = () => {
        if (window.innerWidth < 900) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }
    useEffect(() => {
        if (window.innerWidth < 900) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
        window.addEventListener("resize", handleResize)
    }, [])
    // classNames
    const useStyles = makeStyles(theme => ({
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
            textDecorationLine: "none",
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
    }));
    const classes = useStyles();
    //LanguageSwitcher
    const LanguageSwitcher = () => {
        return i18n.language !== "ar" ? i18n.changeLanguage('ar') : i18n.changeLanguage('en');
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar className={classes.AppBar} position="fixed">
                <Toolbar className={classes.Toolbar}>
                    <Box sx={{ flexGrow: 1 }} className={classes.logoWrapper}>
                        <Link to={"/"} >
                            <img src={Logo} alt="Forlanso" className={classes.logo} />
                        </Link>
                    </Box>
                    <div className={classes.grow} />
                    <Box className={classes.menu1}>
                        <Button className={classes.btn} disableRipple > <Link to={"/page2"} className={classes.link} >  {t("services")}</Link></Button>
                        <Button className={classes.btn} disableRipple> <Link to={"/page2"} className={classes.link}>{t("freelancers")}</Link></Button>
                        <Button className={classes.btn} disableRipple> <Link to={"/page2"} className={classes.link}>{t("howItWork")}</Link></Button>
                        <Button className={classes.btn} disableRipple> <Link to={"/page2"} className={classes.link}>{t("signUp")}</Link></Button>
                        <Button className={classes.btn} disableRipple> <Link to={"/page2"} className={classes.link}>{t("signIn")}</Link></Button>
                        <Button className={classes.btnVide} disableRipple> </Button>
                        <Button onClick={LanguageSwitcher} className={classes.btn}   ><div className={classes.link}>{i18n.languages[2] === "ar" ? "العربية" : "English"} </div></Button>
                    </Box>
                    <Box className={classes.menu}>
                        <List className={classes.menuList}>
                            <ListItem className={classes.btn2}  > <Link to={"/page2"} className={classes.link} >  {t("services")}</Link></ListItem>
                            <ListItem className={classes.btn2} > <Link to={"/page2"} className={classes.link}>{t("freelancers")}</Link></ListItem>
                            <ListItem className={classes.btn2} > <Link to={"/page2"} className={classes.link}>{t("howItWork")}</Link></ListItem>
                            <ListItem className={classes.btn2} > <Link to={"/page2"} className={classes.link}>{t("signUp")}</Link></ListItem>
                            <ListItem className={classes.btn2} > <Link to={"/page2"} className={classes.link}>{t("signIn")}</Link></ListItem>
                            <Divider />
                            <ListItem onClick={LanguageSwitcher} className={classes.btn2}  ><div className={classes.link}>{i18n.languages[2] === "ar" ? "العربية" : "English"} </div></ListItem>
                        </List>
                    </Box>
                    <Box className={classes.menuBG} onClick={() => setMenu(!menu)} />
                    <div><MenuIcon className={classes.menuBtn} onClick={() => setMenu(!menu)} /> </div>
                </Toolbar>
            </AppBar>
            <div className={classes.AppBarSpace} />
        </Box>
    );
}
