import React from 'react'
import FreeLancerCard from "../freelancer_card";
import { useTranslation } from 'react-i18next';
// importing assets 
// mui
import Grid from '@material-ui/core/Grid';
 import {useStyles} from './style'

const MeetFreelancers = ({ freelancers }) => {
    const { t } = useTranslation();
    //styling
   
    const classes = useStyles()();
    return (
        <>
            <div className={classes.howItWorkWrapper} >
                <div className={classes.howItWorkItemTitle}>
                    {t('meet_qualified')}
                </div>
                <div className={classes.freelancerCardWrapper}>
                    <Grid className={classes.gridWrapper} >
                        <Grid item sm={12}>
                            <Grid container justifyContent="center" spacing={2}>
                                {freelancers && freelancers.map((freelancer, i) => <div key={"service" + i} className={classes.FreelancerCardWrapprer}>
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
