import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Button, CardActionArea, CardActions } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import Grid from '@material-ui/core/Grid';
import Zoom from '@material-ui/core/Zoom';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
const FreelancerCard = ({ freelancer, index }) => {
    // language
    const { t, i18n } = useTranslation();
    //mui styling 
    const useStyles = makeStyles(theme => ({
        Avatar: {
            borderRadius: "50%",
            width: "130px",
            height: "130px",
            position: "absolute",
            top: "0",
            left: "50%",
            transform: "translate(-50%,-50%)",
            margin: "0 auto"
        },
        freelancer_name: {
            textAlign: "center",
            margin: "60px auto 0",
            fontFamily: "'Cairo',sans-serif",
            fontSize: "25px"
        }, 
        freelancer_experience: {
            color: "#b8b8b9",
            textAlign: "center",
            fontFamily: "'Cairo',sans-serif",
            fontSize: "12px"
        },
        freelancer_about: {
            color: "#212529",
            fontFamily: "'Cairo',sans-serif",
            fontSize: "18px",
            margin: "23px auto 0",
            height: "120px",
            overflow: "hidden",
            lineHeight: "19px"
        },
        ViewBtn: {
            background: "#65c042",
            color: "#fff",
            marginTop: "-10px",
            borderRadius: "10px",
            fontFamily: "'Cairo',sans-serif",
            paddingTop: "10px",
            paddingBottom: "10px",
            "&:hover": {
                background: "#92d878",
            }
        }
    }))
    const classes = useStyles();
    return (
        <Zoom style={{ transitionDelay: `${1 * index}0ms` }} in={true}>
            <Paper style={{ padding: "20px 10px", margin: '0px 20px', background: "transparent" }} elevation={0} >
                <Grid >
                    <Card sx={{ maxWidth: 345 }} style={{
                        boxShadow: "0 0 10px rgba(150,150,150,0.5)",
                        borderRadius: "10px",
                        overflow: "visible",
                        height: '350px',
                        margin: "13px auto"
                    }}>
                        <CardActionArea>
                            <img className={classes.Avatar}
                                src={freelancer.profile_image}
                                alt={classes.freelancer_name}
                            />
                        </CardActionArea>
                        <CardContent className={classes.CardContent}>
                            <Typography className={classes.freelancer_name} variant="h4" component="div">
                                {freelancer.first_name_en}  {freelancer.last_name_en}
                            </Typography>
                            <Typography className={classes.freelancer_experience} variant="h6" component="div">
                                {freelancer.provider_information && freelancer.provider_information.experience}
                            </Typography>
                            <Typography className={classes.freelancer_about} variant="h6" component="div">
                                <div dangerouslySetInnerHTML={{ __html: i18n.language === 'ar' ? freelancer.provider_information['about_ar'] : freelancer.provider_information['about_en'] }} />
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="primary" fullWidth className={classes.ViewBtn}>
                                {t('view')}
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Paper>
        </Zoom>
    );
}
export default FreelancerCard
