import React from 'react'
import { useTranslation, withTranslation, Trans } from 'react-i18next';
import Layout from '../components/layout';

 const Page2 = () => {
    const { t, i18n } = useTranslation();
    
    return (
        <Layout>
            
            <div className="App">
                <h2>{t('title2')}</h2>
            </div>
        </Layout>
    )
}
export default Page2
