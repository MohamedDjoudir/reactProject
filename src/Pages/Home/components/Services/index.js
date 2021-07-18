import React from 'react'
import Grid from '@material-ui/core/Grid';
import { useTranslation } from 'react-i18next';
import Card from "../../../../components/Shared/Card";
// importing assets 
// mui
import styles from './Services.module.scss'

const HowItIsWork = ({ services }) => {
    const { t } = useTranslation();
    return (
        <>
            <div className={styles.howItWorkItemTitle}>
                {t('services')}
            </div>
            <div className={styles.servicesWrapper}>
                <Grid container justifyContent='center'  columns={{ xs: 4, sm: 8, md: 4 }} className={styles.gridWrapper}>
                    {services && services.map((service, i) => (
                        <Grid  justifyContent='center' item xs={12} sm={6} md={4} lg={3} xl={3} key={i+"card"}>
                            <Card cardData={service} index={i} buttonTextID={'view'} />
                        </Grid>
                    ))}
                </Grid>
            </div>
        </>
    )
}
export default HowItIsWork
