import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Button, CardActionArea, CardActions } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import Grid from '@material-ui/core/Grid';
import Zoom from '@material-ui/core/Zoom';
import Paper from '@material-ui/core/Paper';
 import styles from './freelancer_card.module.scss'

const FreelancerCard = ({ freelancer, index }) => {
    // language
    const { t, i18n } = useTranslation();
     
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
                            <img className={styles.Avatar}
                                src={freelancer.profile_image}
                                alt={styles.freelancer_name}
                            />
                        </CardActionArea>
                        <CardContent className={styles.CardContent}>
                            <Typography className={styles.freelancer_name} variant="h4" component="div">
                                {freelancer.first_name_en}  {freelancer.last_name_en}
                            </Typography>
                            <Typography className={styles.freelancer_experience} variant="h6" component="div">
                                {freelancer.provider_information && freelancer.provider_information.experience}
                            </Typography>
                            <Typography className={styles.freelancer_about} variant="h6" component="div">
                                <div dangerouslySetInnerHTML={{ __html: i18n.language === 'ar' ? freelancer.provider_information['about_ar'] : freelancer.provider_information['about_en'] }} />
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="primary" fullWidth className={styles.ViewBtn}>
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
