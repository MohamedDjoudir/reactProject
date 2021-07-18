import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
// M_UI component s
import { AppBar, div, Toolbar, Divider, Button, ListItem, List } from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';
import styles from './HeaderStyle.module.scss'
// assets
import Logo from '../../assets/logo/logo.svg'
import LogoAr from '../../assets/logo/logoAr.svg'


export default function Header() {
    const { t, i18n } = useTranslation();
    // component states
    const [menu, setMenu] = useState(false)
    //const styles = useStyles(menu)();
    //LanguageSwitcher
    const LanguageSwitcher = () => {
        return i18n.language !== "ar" ? i18n.changeLanguage('ar') : i18n.changeLanguage('en');
    }
    return (
        <div>
            <AppBar className={styles.AppBar} position="fixed">
                <Toolbar className={styles.Toolbar}>
                    <div sx={{ flexGrow: 1 }} className={styles.logoWrapper}>
                        {i18n.language !== "ar" ?
                            <Link to={"/"} >
                                <img src={Logo} alt="Forlanso" className={styles.logo} />
                            </Link>
                            :
                            <Link to={"/"} >
                                <img src={LogoAr} alt="Forlanso" className={styles.logo} />
                            </Link>
                        }
                    </div>
                    <div className={styles.grow} />
                    <div className={styles.menu1}>
                        <Button className={styles.btn} disableRipple > <Link to={"/page2"} className={styles.link2} >  {t("services")}</Link></Button>
                        <Button className={styles.btn} disableRipple> <Link to={"/page2"} className={styles.link2}>{t("freelancers")}</Link></Button>
                        <Button className={styles.btn} disableRipple> <Link to={"/page2"} className={styles.link2}>{t("howItWork")}</Link></Button>
                        <Button className={styles.btn} disableRipple> <Link to={"/page2"} className={styles.link2}>{t("signUp")}</Link></Button>
                        <Button className={styles.btn} disableRipple> <Link to={"/page2"} className={styles.link2}>{t("signIn")}</Link></Button>
                        <Button className={styles.btnVide} disableRipple> </Button>
                        <Button onClick={LanguageSwitcher} className={styles.btn}   ><div className={styles.language}>{i18n.languages[2] === "ar" ? "العربية" : "English"} </div></Button>
                    </div>
                    <div className={styles.menu} style={menu ? { right: 0, left: 0 } : {}}>
                        <List className={styles.menuList}>
                            <Link to={"/page2"} className={styles.link} ><ListItem className={styles.btn2} > <span className={styles.link}>   {t("services")}</span></ListItem></Link>
                            <Link to={"/page2"} className={styles.link} ><ListItem className={styles.btn2} > <span className={styles.link}> {t("freelancers")}</span></ListItem></Link>
                            <Link to={"/page2"} className={styles.link} ><ListItem className={styles.btn2} > <span className={styles.link}> {t("howItWork")}</span></ListItem></Link>
                            <Link to={"/page2"} className={styles.link} ><ListItem className={styles.btn2} > <span className={styles.link}> {t("signUp")}</span></ListItem></Link>
                            <Link to={"/page2"} className={styles.link} ><ListItem className={styles.btn2} > <span className={styles.link}> {t("signIn")}</span></ListItem></Link>
                            <Divider />
                            <ListItem onClick={LanguageSwitcher} className={styles.btn2}  ><div className={styles.language}>{i18n.languages[2] === "ar" ? "العربية" : "English"} </div></ListItem>
                        </List>
                    </div>
                    <div className={styles.menuBG} style={menu ? { right: 0, left: 0 } : {}} onClick={() => setMenu(!menu)} />
                    <div><MenuIcon className={styles.menuBtn} onClick={() => setMenu(!menu)} /> </div>
                </Toolbar>
            </AppBar>
            <div className={styles.AppBarSpace} />
        </div>
    );
}
