import React from 'react'
import { useTranslation, withTranslation, Trans } from 'react-i18next';
import Layout from '../components/layout';


const Home = () => {
    const { t, i18n } = useTranslation();






    return (
        <Layout>
            <>
                <div className="App">
                    <h2>{t('title')}</h2>
                </div>
            </>
        </Layout>
    )
}
export default Home
