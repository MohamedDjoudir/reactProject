import React from 'react'
import FreeLancerCard from "./freelancer_card";
import { useTranslation } from 'react-i18next';
// importing assets 
// mui
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
const MeetFreelancers = ({ freelancers }) => {
    const { t, i18n } = useTranslation();
    //styling
    const useStyles = makeStyles(theme => ({
        servicesWrapper: {
            width: "100%",
            maxWidth: "1400px",
            overflow: "hidden",
        },
        FreelancerCardWrapprer: {
            minWidth: "350px",
            width: "350px",
            maxWidth: "350px",
            [theme.breakpoints.down('sm')]: {
                margin: "20px auto",
                minWidth: "350px",
                width: "350px",
                maxWidth: "350px"
            },
        },
        gridWrapper: {
            padding: "20px 50px",
            position: "relative",
            borderRadius: "10px",
            margin: "35px auto 0 auto",
            width: "100%",
            maxWidth: "1400px",
            [theme.breakpoints.down('sm')]: {
                padding: "10px",
                position: "relative",
                borderRadius: "7px",
                margin: "35px auto 0 auto",
                width: "100%",
                maxWidth: "1400px"
            },
        },
        howItWorkItemTitle: {
            width: "max-content",
            margin: "20px auto",
            fontFamily: "'Almarai',sans-serif",
            fontSize: "30px",
            color: "#303030",
            [theme.breakpoints.down('xs')]: {
                fontSize: "23px",
                textAlign: i18n.language === 'ar' ? "right" : "left",
            },
        },
    }))
    const classes = useStyles();
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
