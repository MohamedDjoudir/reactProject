import React from 'react'
import BtnDiscoverAllCat from '../Btn_DiscoverAllCat'
//mui
import { useTranslation } from 'react-i18next';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Avatar from '@material-ui/core/Avatar';
// mui
import styles from './BayerFreelancer.module.scss'
 const BayerFreelancer = ({ categories }) => {
    const { t} = useTranslation();
    //styling
     
     return (
        <>
            <div className={styles.bayerFreelancerWrapper2}>
                <div className={styles.bayerFreelancerWrapper} >
                    {/* bayer */}
                    <div >
                        <div className={styles.features}>
                            <ListItem className={styles.ListItem}>
                                <ListItemAvatar>
                                    <Avatar style={{ background: "transparent" }}>
                                        <CheckCircleIcon style={{ fill: "#65c042" }} />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={<div className={styles.featuresText}>{t('dedicated')}</div>}
                                />
                            </ListItem>
                            <ListItem className={styles.ListItem}>
                                <ListItemAvatar>
                                    <Avatar style={{ background: "transparent" }}>
                                        <CheckCircleIcon style={{ fill: "#65c042" }} />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={<div className={styles.featuresText}>{t('payment')}</div>}
                                />
                            </ListItem>
                            <ListItem className={styles.ListItem}>
                                <ListItemAvatar>
                                    <Avatar style={{ background: "transparent" }}>
                                        <CheckCircleIcon style={{ fill: "#65c042" }} />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText className={styles.featuresText}
                                    primary={<div className={styles.featuresText}>{t('get_maximum_value')}</div>}
                                />
                            </ListItem>
                            <ListItem className={styles.ListItem}>
                                <ListItemAvatar>
                                    <Avatar style={{ background: "transparent" }}>
                                        <CheckCircleIcon style={{ fill: "#65c042" }} />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={<div className={styles.featuresText}>{t('work_with_your_budget')}</div>}
                                />
                            </ListItem>
                        </div>
                        <BtnDiscoverAllCat />
                    </div>
                    {/* image */}
                    <div className={styles.sign_up_like_freelanser_imgWrapper}>
                        <img src='https://www.forlanso.com/why-forlanso.jpeg' alt="sign_up_like_freelanser" className={styles.sign_up_like_freelanser} />
                    </div>
                    {/* freelancer */}
                    <div>
                        <div className={styles.features}>
                            <ListItem className={styles.ListItem}>
                                <ListItemAvatar>
                                    <Avatar style={{ background: "transparent" }}>
                                        <CheckCircleIcon style={{ fill: "#65c042" }} />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={<div className={styles.featuresText}>{t('three_month_commission')}</div>}
                                />
                            </ListItem>
                            <ListItem className={styles.ListItem}>
                                <ListItemAvatar>
                                    <Avatar style={{ background: "transparent" }}>
                                        <CheckCircleIcon style={{ fill: "#65c042" }} />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={<div className={styles.featuresText}>{t('three_month_no_money')}</div>}
                                />
                            </ListItem>
                            <ListItem className={styles.ListItem}>
                                <ListItemAvatar>
                                    <Avatar style={{ background: "transparent" }}>
                                        <CheckCircleIcon style={{ fill: "#65c042" }} />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText className={styles.featuresText}
                                    primary={<div className={styles.featuresText}>{t('mission_you_choose_from')}</div>}
                                />
                            </ListItem>
                        </div>
                        <BtnDiscoverAllCat />
                    </div >
                </div>
            </div>
        </>
    )
}
export default BayerFreelancer
