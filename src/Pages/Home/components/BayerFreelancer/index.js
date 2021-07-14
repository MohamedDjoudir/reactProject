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
import {useStyles} from './style'
 const BayerFreelancer = ({ categories }) => {
    const { t} = useTranslation();
    //styling
     
    const classes = useStyles()();
    return (
        <>
            <div className={classes.bayerFreelancerWrapper2}>
                <div className={classes.bayerFreelancerWrapper} >
                    {/* bayer */}
                    <div >
                        <div className={classes.features}>
                            <ListItem className={classes.ListItem}>
                                <ListItemAvatar>
                                    <Avatar style={{ background: "transparent", marginTop: "-20px" }}>
                                        <CheckCircleIcon style={{ fill: "#65c042" }} />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={<div className={classes.featuresText}>{t('dedicated')}</div>}
                                />
                            </ListItem>
                            <ListItem className={classes.ListItem}>
                                <ListItemAvatar>
                                    <Avatar style={{ background: "transparent", marginTop: "-20px" }}>
                                        <CheckCircleIcon style={{ fill: "#65c042" }} />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={<div className={classes.featuresText}>{t('payment')}</div>}
                                />
                            </ListItem>
                            <ListItem className={classes.ListItem}>
                                <ListItemAvatar>
                                    <Avatar style={{ background: "transparent", marginTop: "-20px" }}>
                                        <CheckCircleIcon style={{ fill: "#65c042" }} />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText className={classes.featuresText}
                                    primary={<div className={classes.featuresText}>{t('get_maximum_value')}</div>}
                                />
                            </ListItem>
                            <ListItem className={classes.ListItem}>
                                <ListItemAvatar>
                                    <Avatar style={{ background: "transparent", marginTop: "-20px" }}>
                                        <CheckCircleIcon style={{ fill: "#65c042" }} />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={<div className={classes.featuresText}>{t('work_with_your_budget')}</div>}
                                />
                            </ListItem>
                        </div>
                        <BtnDiscoverAllCat />
                    </div>
                    {/* image */}
                    <div className={classes.sign_up_like_freelanser_imgWrapper}>
                        <img src='https://www.forlanso.com/why-forlanso.jpeg' alt="sign_up_like_freelanser" className={classes.sign_up_like_freelanser} />
                    </div>
                    {/* freelancer */}
                    <div>
                        <div className={classes.features}>
                            <ListItem className={classes.ListItem}>
                                <ListItemAvatar>
                                    <Avatar style={{ background: "transparent", marginTop: "-20px" }}>
                                        <CheckCircleIcon style={{ fill: "#65c042" }} />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={<div className={classes.featuresText}>{t('three_month_commission')}</div>}
                                />
                            </ListItem>
                            <ListItem className={classes.ListItem}>
                                <ListItemAvatar>
                                    <Avatar style={{ background: "transparent", marginTop: "-20px" }}>
                                        <CheckCircleIcon style={{ fill: "#65c042" }} />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={<div className={classes.featuresText}>{t('three_month_no_money')}</div>}
                                />
                            </ListItem>
                            <ListItem className={classes.ListItem}>
                                <ListItemAvatar>
                                    <Avatar style={{ background: "transparent", marginTop: "-20px" }}>
                                        <CheckCircleIcon style={{ fill: "#65c042" }} />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText className={classes.featuresText}
                                    primary={<div className={classes.featuresText}>{t('mission_you_choose_from')}</div>}
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
