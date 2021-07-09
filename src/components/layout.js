import React from 'react'
import { useTranslation, withTranslation, Trans } from 'react-i18next';
import { Link } from "react-router-dom";


const Layout = ({ children }) => {
    const { t, i18n } = useTranslation();
    document.body.dir = i18n.dir();





    return (
        <>

            <li> <Link to={"/page2"}>{t("page2")}</Link></li>

            <li><Link to={"/"}>{t("home")}</Link></li>
            {children}
            <button type="button" onClick={() => i18n.changeLanguage('ar')}>
                ar
            </button>
            <button type="button" onClick={() => i18n.changeLanguage('en')}>
                en
            </button>
        </>
    )
}
export default Layout