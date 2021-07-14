import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Button, CardActionArea, CardActions } from '@material-ui/core';
import { useTranslation} from 'react-i18next';
import Grid from '@material-ui/core/Grid';
import Zoom from '@material-ui/core/Zoom';
import Paper from '@material-ui/core/Paper';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
 import { FaStar } from 'react-icons/fa';
import {useStyles} from './style'

const ServiceCard = ({ service, index }) => {
    // language
    const { t, i18n } = useTranslation();
   
    const classes = useStyles()();
    return (
        <Zoom style={{ transitionDelay: `${1 * index}0ms` }} in={true}>
            <Paper style={{ padding: "20px 10px", margin: '0px 0px', background: "transparent" }} elevation={0} >
                <Grid >
                    <Card sx={{ maxWidth: 345 }} style={{
                        boxShadow: "0 0 10px rgba(150,150,150,0.5)",
                        borderRadius: "10px"
                    }}>
                        <CardActionArea>
                            <CardMedia component='img' style={{ height: "170px" }}
                                src={(service.files && service.files[0]) && service.files[0].path}
                                title={i18n.language === 'ar' ? service['name_' + i18n.language] : service['name_en']}
                            />
                            <CardContent className={classes.CardContent}>
                                <ListItem className={classes.paddingZero}>
                                    <ListItemAvatar>
                                        <Avatar src={(service.user && service.user.profile_image) && service.user.profile_image} className={classes.howItWorkItemIcon} />
                                    </ListItemAvatar>
                                    <div className={classes.user_name}>
                                        <h1 className={classes.user_name}>{(service.user && service.user.first_name_en) && service.user.first_name_en + ' ' + service.user.last_name_en}</h1>
                                        <div className={classes.user_name_job} >{(service.user && service.user.provider_information) && service.user.provider_information.experience}</div>
                                    </div>
                                </ListItem>
                                <Typography className={classes.jobName} gutterBottom variant="h5" component="div">
                                    {i18n.language === 'ar' ? service['name_' + i18n.language] : service['name_en']}
                                </Typography>
                                <div className={classes.soldbar}>
                                    <div className={classes.rating}>
                                        <div>
                                            <FaStar /> {service.rating && service.rating}
                                        </div>
                                        <div style={{ color: "#b8b8b9" }}> {service.sold && service.sold} {t('sold')}</div>
                                    </div>
                                    <div style={{ color: "#717172" }}>
                                        $ {service.price && service.price}
                                    </div>
                                </div>
                                <br />
                                <Divider />
                            </CardContent>
                        </CardActionArea>
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
export default ServiceCard
