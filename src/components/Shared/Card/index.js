import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Button, CardActions } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
 import Zoom from '@material-ui/core/Zoom';
import Paper from '@material-ui/core/Paper';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import { FaStar } from 'react-icons/fa';
import styles from './servic_card.module.scss'

const CarD = ({ cardData, index, buttonTextID }) => {
    // language
    const { t, i18n } = useTranslation();
    return (

        <Zoom style={{ transitionDelay: `${1 * index}0ms` }} in={true}>
            <Paper className={styles.cardWrapper} elevation={0} >
                <Card className={styles.CardBody}  >
                    <CardMedia
                        component='img'
                        className={styles.CardBodyMedia}
                        src={(cardData.files && cardData.files[0]) && cardData.files[0].path}
                        title={i18n.language === 'ar' ? cardData['name_' + i18n.language] : cardData['name_en']}
                    />
                    <CardContent className={styles.CardContent}>
                        <ListItem className={styles.paddingZero}>
                            <ListItemAvatar>
                                <Avatar
                                    src={(cardData.user && cardData.user.profile_image) && cardData.user.profile_image}
                                    className={styles.howItWorkItemIcon} />
                            </ListItemAvatar>
                            <div className={styles.user_name}>
                                <h1 className={styles.user_name}>
                                    {(cardData.user && cardData.user.first_name_en) && cardData.user.first_name_en + ' ' + cardData.user.last_name_en}
                                </h1>
                                <div className={styles.user_name_job} >
                                    {(cardData.user && cardData.user.provider_information) && cardData.user.provider_information.experience}
                                </div>
                            </div>
                        </ListItem>
                        <Typography
                            className={styles.jobName}
                            gutterBottom variant="h5"
                            component="div"
                        >
                            {i18n.language === 'ar' ? cardData['name_' + i18n.language] : cardData['name_en']}
                        </Typography>
                        <div className={styles.soldbar}>
                            <div className={styles.rating}>
                                <div>
                                    <FaStar /> {cardData.rating && cardData.rating}
                                </div>
                                <div className={styles.sold}  > {cardData.sold && cardData.sold} {t('sold')}</div>
                            </div>
                            <div className={styles.price}  >
                                ${cardData.price && cardData.price}
                            </div>
                        </div>
                        <br />
                        <Divider />
                    </CardContent>
                    <CardActions>
                        <Button
                            size="small"
                            color="primary"
                            fullWidth
                            className={styles.ViewBtn}
                        >
                            <span className={styles.ViewBtnFont}>{t(buttonTextID)} </span>
                        </Button>
                    </CardActions>
                </Card>
            </Paper>
        </Zoom>

    );
}
export default CarD
