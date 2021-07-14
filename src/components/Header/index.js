import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
// M_UI component s
import { AppBar, Box, Toolbar, Divider, Button, ListItem, List } from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';
import { useStyles } from './HeaderStyle'
// assets
import Logo from '../../assets/logo/logo.png'



export default function Header() {
    const { t, i18n } = useTranslation();
    // component states
    const [menu, setMenu] = useState(false)
    const classes = useStyles(menu)();
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
                        <Button className={classes.btn} disableRipple > <Link to={"/page2"} className={classes.link2} >  {t("services")}</Link></Button>
                        <Button className={classes.btn} disableRipple> <Link to={"/page2"} className={classes.link2}>{t("freelancers")}</Link></Button>
                        <Button className={classes.btn} disableRipple> <Link to={"/page2"} className={classes.link2}>{t("howItWork")}</Link></Button>
                        <Button className={classes.btn} disableRipple> <Link to={"/page2"} className={classes.link2}>{t("signUp")}</Link></Button>
                        <Button className={classes.btn} disableRipple> <Link to={"/page2"} className={classes.link2}>{t("signIn")}</Link></Button>
                        <Button className={classes.btnVide} disableRipple> </Button>
                        <Button onClick={LanguageSwitcher} className={classes.btn}   ><div className={classes.link}>{i18n.languages[2] === "ar" ? "العربية" : "English"} </div></Button>
                    </Box>
                    <Box className={classes.menu}>
                        <List className={classes.menuList}>
                            <Link to={"/page2"} className={classes.link} ><ListItem className={classes.btn2} > <span className={classes.link}>   {t("services")}</span></ListItem></Link>
                            <Link to={"/page2"} className={classes.link} ><ListItem className={classes.btn2} > <span className={classes.link}> {t("freelancers")}</span></ListItem></Link>
                            <Link to={"/page2"} className={classes.link} ><ListItem className={classes.btn2} > <span className={classes.link}> {t("howItWork")}</span></ListItem></Link>
                            <Link to={"/page2"} className={classes.link} ><ListItem className={classes.btn2} > <span className={classes.link}> {t("signUp")}</span></ListItem></Link>
                            <Link to={"/page2"} className={classes.link} ><ListItem className={classes.btn2} > <span className={classes.link}> {t("signIn")}</span></ListItem></Link>
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
