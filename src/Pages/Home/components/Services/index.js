import React from 'react'
import ServiceCard from "../servic_card";
import { useTranslation } from 'react-i18next';
// importing assets 
// mui
import Grid from '@material-ui/core/Grid';
 import styles from './Services.module.scss'

const HowItIsWork = ({ services }) => {
    const { t} = useTranslation();
     
     
     return (
        <>
            <div className={styles.howItWorkItemTitle}>
                {t('services')}
            </div>
            <div className={styles.servicesWrapper}>
                <Grid className={styles.gtidWrapper} >
                    <Grid item sm={12} xl={12}>
                        <Grid container justifyContent="center" spacing={2}>
                            {services && services.map((service, i) => <div key={"service" + i} className={styles.serviceCardWrapprer} >
                                <ServiceCard service={service} index={i} />
                            </div>)}
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}
export default HowItIsWork
