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
    // component states
    const [isMobile, setIsMobile] = useState(false)
    const [menu, setMenu] = useState(false)
    // mobile screen detecter
    const handleResize = () => {
        if (window.innerWidth < 767) {
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
    const useStyles = makeStyles({
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
            padding:"0 35px 0 25px !important"
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
            minWidth:"4vw"
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
        menu: {
            position: "fixed",
            height: '100vh',
            width: "70vw",
            background: "#fff",
            top: "0",
            zIndex: "-1",
            left: menu ? "0" : '-200%',
            transition: "all 700ms cubic-bezier(0.16, 1, 0.3, 1)",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: "80px 20px 0"
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
            zIndex: "-10"
        },
        menuBtn: {
            fontSize: "35px",
            cursor: "pointer"
        },
    });
    const classes = useStyles();
    const { t, i18n } = useTranslation();
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
                    {!isMobile && <Box>
                        <Button className={classes.btn} disableRipple > <Link to={"/page2"} className={classes.link} >  {t("services")}</Link></Button>
                        <Button className={classes.btn} disableRipple> <Link to={"/page2"} className={classes.link}>{t("freelancers")}</Link></Button>
                        <Button className={classes.btn} disableRipple> <Link to={"/page2"} className={classes.link}>{t("howItWork")}</Link></Button>
                        <Button className={classes.btn} disableRipple> <Link to={"/page2"} className={classes.link}>{t("signUp")}</Link></Button>
                        <Button className={classes.btn} disableRipple> <Link to={"/page2"} className={classes.link}>{t("signIn")}</Link></Button>
                        <Button className={classes.btnVide} disableRipple> </Button>
                        <Button onClick={LanguageSwitcher} className={classes.btn}   ><div className={classes.link}>{i18n.languages[2] === "ar" ? "العربية" : "English"} </div></Button>
                    </Box>}
                    {(isMobile) && <Box className={classes.menu}>
                        <List>
                            <ListItem className={classes.btn}  > <Link to={"/page2"} className={classes.link} >  {t("services")}</Link></ListItem>
                            <ListItem className={classes.btn} > <Link to={"/page2"} className={classes.link}>{t("freelancers")}</Link></ListItem>
                            <ListItem className={classes.btn} > <Link to={"/page2"} className={classes.link}>{t("howItWork")}</Link></ListItem>
                            <ListItem className={classes.btn} > <Link to={"/page2"} className={classes.link}>{t("signUp")}</Link></ListItem>
                            <ListItem className={classes.btn} > <Link to={"/page2"} className={classes.link}>{t("signIn")}</Link></ListItem>
                            <Divider />
                            <ListItem onClick={LanguageSwitcher} className={classes.btn}  ><div className={classes.link}>{i18n.languages[2] === "ar" ? "العربية" : "English"} </div></ListItem>
                        </List>
                    </Box>}
                    {(isMobile) && <Box className={classes.menuBG} onClick={() => setMenu(!menu)} />}
                    {isMobile && <div><MenuIcon className={classes.menuBtn} onClick={() => setMenu(!menu)} /> </div>}
                </Toolbar>
            </AppBar>
            <div className={classes.AppBarSpace} />
        </Box>
    );
}
