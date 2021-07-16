import React from 'react'
import FreeLancerCard from "../freelancer_card";
import { useTranslation } from 'react-i18next';
// importing assets 
// mui
import Grid from '@material-ui/core/Grid';
import styles from './MeetFreelancers.module.scss'

const MeetFreelancers = ({ freelancers }) => {
    const { t } = useTranslation();
    //styling

    return (
        <>
            <div className={styles.howItWorkWrapper} >
                <div className={styles.howItWorkItemTitle}>
                    {t('meet_qualified')}
                </div>
                <div className={styles.freelancerCardWrapper}>
                    <Grid className={styles.gridWrapper} >
                        <Grid item sm={12}>
                            <Grid container justifyContent="center" spacing={2}>
                                {freelancers && freelancers.map((freelancer, i) => <div key={"service" + i} className={styles.FreelancerCardWrapprer}>
                                    <FreeLancerCard freelancer={freelancer} index={i} />
                                </div>)}
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </>
    )
}
export default MeetFreelancers
