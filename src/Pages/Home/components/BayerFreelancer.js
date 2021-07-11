import React from 'react'
import BtnDiscoverAllCat from './Btn_DiscoverAllCat'


//mui
import { useTranslation } from 'react-i18next';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Avatar from '@material-ui/core/Avatar';


// mui

import { makeStyles } from '@material-ui/core/styles';

const BayerFreelancer = ({ categories }) => {
    const { t, i18n } = useTranslation();

    //styling
    const useStyles = makeStyles(theme => ({
        featuresText: {
            fontSize: "1.125rem",
            color: "#303030",
            fontFamily: "'Almarai',sans-serif",
            maxHeight: "360px",
            overflow: "Hidden",
            textAlign: i18n.language === 'ar' ? "right" : "left",
            [theme.breakpoints.down('sm')]: {
                maxHeight: "",

            },

        },
        bayerFreelancerWrapper: {
            display: "flex",
            alignItems: "flex-start",
            background: "#fff",
            justifyContent: "space-around",
            margin: "3rem",
            borderRadius: "1px",
            width: "100%",
            [theme.breakpoints.down('sm')]: {
                display: "block",
                alignItems: "",
                justifyContent: "",
            },
        },
        bayerFreelancerWrapper2: {
            background: "#fcfcfc",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",

        },
        features: {
            margin: "2rem auto 1rem",
            background: "#fff",
            maxWidth: "360px",
            height: "280px",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            [theme.breakpoints.down('sm')]: {
                display: "block",
                justifyContent: "",
            },
        },
        sign_up_like_freelanser_imgWrapper: {
            display: "block",
            margin: "3.5rem auto",
            width: "30vw",
            maxWidth: "450px",
            [theme.breakpoints.down('sm')]: {
                margin: "0 auto",
                width: "90vw",

            },
        },
        sign_up_like_freelanser: {
            width: "100%",


        },
    }))
    const classes = useStyles();

    return (
        <>
            <div className={classes.bayerFreelancerWrapper2}>
                <div className={classes.bayerFreelancerWrapper} >
                    {/* bayer */}
                    <div >
                        <div className={classes.features}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar style={{ background: "transparent", marginTop: "-20px" }}>
                                        <CheckCircleIcon style={{ fill: "#65c042" }} />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={<div className={classes.featuresText}>{t('dedicated')}</div>}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar style={{ background: "transparent", marginTop: "-20px" }}>
                                        <CheckCircleIcon style={{ fill: "#65c042" }} />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={<div className={classes.featuresText}>{t('payment')}</div>}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar style={{ background: "transparent", marginTop: "-20px" }}>
                                        <CheckCircleIcon style={{ fill: "#65c042" }} />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText className={classes.featuresText}
                                    primary={<div className={classes.featuresText}>{t('get_maximum_value')}</div>}
                                />
                            </ListItem>
                            <ListItem>
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
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar style={{ background: "transparent", marginTop: "-20px" }}>
                                        <CheckCircleIcon style={{ fill: "#65c042" }} />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={<div className={classes.featuresText}>{t('three_month_commission')}</div>}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar style={{ background: "transparent", marginTop: "-20px" }}>
                                        <CheckCircleIcon style={{ fill: "#65c042" }} />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={<div className={classes.featuresText}>{t('three_month_no_money')}</div>}
                                />
                            </ListItem>
                            <ListItem>
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
