import React from 'react'
// importing assets 
import searchIcon from "../../../assets/home-assets/find-seller.svg"
import bag from "../../../assets/home-assets/bag.svg"
import protection from "../../../assets/home-assets/protection.svg"
import shiping from "../../../assets/home-assets/shiping.svg"
//mui
import { useTranslation } from 'react-i18next';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
// mui
import { makeStyles } from '@material-ui/core/styles';
const HowItIsWork = ({ categories }) => {
    const { t, i18n } = useTranslation();
    //styling
    const useStyles = makeStyles(theme => ({
        featuresText: {
            fontSize: "1.125rem",
            color: "#303030",
            fontFamily: "'Almarai',sans-serif",
            textAlign: 'center',
            maxHeight: "360px",
            overflow: "Hidden",
            [theme.breakpoints.down('')]: {
                maxHeight: "",
                textAlign: i18n.language === 'ar' ? "right" : "left",
            },
        },
        howItWorkItemWraper: {
            padding: "20px 0",
            background: "#e6f7fd",
            display: "flex",
            [theme.breakpoints.down('xs')]: {
                display: "block",
            },
        },
        howItWorkWrapper: {
            background: "#e6f7fd",
            padding: "20px 0",
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
        howItWorkItemIcon: {
            background: "#70d549",
            marginLeft: "1.7rem",
            marginRight: "1.3rem",
            width: "130px",
            height: "130px",
            padding: "33px",
            [theme.breakpoints.down('md')]: {
                width: "50px",
                height: "50px",
                padding: "13px",
            },
        },
        featuresTextSec: {
            fontFamily: "'Almarai',sans-serif",
            lineHeight: "27px",
            textAlign: 'center',
            [theme.breakpoints.down('md')]: {
                textAlign: i18n.language === 'ar' ? "right" : "left",
            },
        },
        howItWorkItemWrapper: {
            flexDirection: "column",
            [theme.breakpoints.down('md')]: {
                flexDirection: "",
            },
        },
    }))
    const classes = useStyles();
    return (
        <>
            <div className={classes.howItWorkWrapper} >
                <div className={classes.howItWorkItemTitle}>
                    {t('how_it_work')}
                </div>
                <div className={classes.howItWorkItemWraper}>
                    <ListItem className={classes.howItWorkItemWrapper}>
                        <ListItemAvatar>
                            <Avatar src={searchIcon} className={classes.howItWorkItemIcon} />
                        </ListItemAvatar>
                        <div>
                            <h1 className={classes.featuresText}>{t('find_the')}</h1>
                            <div className={classes.featuresTextSec}>{t('find_the_desc')}</div>
                        </div>
                    </ListItem>
                    <ListItem className={classes.howItWorkItemWrapper}>
                        <ListItemAvatar>
                            <Avatar src={bag} className={classes.howItWorkItemIcon} />
                        </ListItemAvatar>
                        <div>
                            <h1 className={classes.featuresText}>{t('order')}</h1>
                            <div className={classes.featuresTextSec}>{t('order_desc')}</div>
                        </div>
                    </ListItem>
                    <ListItem className={classes.howItWorkItemWrapper}>
                        <ListItemAvatar>
                            <Avatar src={protection} className={classes.howItWorkItemIcon} />
                        </ListItemAvatar>
                        <div className={classes.featuresText}>
                            <h1 className={classes.featuresText}>{t('money')}</h1>
                            <div className={classes.featuresTextSec} >{t('money_desc')}</div>
                        </div>
                    </ListItem>
                    <ListItem className={classes.howItWorkItemWrapper}>
                        <ListItemAvatar>
                            <Avatar src={shiping} className={classes.howItWorkItemIcon} />
                        </ListItemAvatar>
                        <div className={classes.featuresText}>
                            <h1 className={classes.featuresText}>{t('receive')}</h1>
                            <div className={classes.featuresTextSec} >{t('receive_desc')}</div>
                        </div>
                    </ListItem>
                </div>
            </div>
        </>
    )
}
export default HowItIsWork
