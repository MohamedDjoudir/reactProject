import React from 'react'
import { useTranslation, withTranslation, Trans } from 'react-i18next';


const Home = () => {
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };






    return (
        <h1>
            <div className="App">
                <h2>{t('title')}</h2>
            </div>
            <button type="button" onClick={() => changeLanguage('de')}>
          de
        </button>
        <button type="button" onClick={() => changeLanguage('en')}>
          en
        </button>
        </h1>
    )
}
export default Home
