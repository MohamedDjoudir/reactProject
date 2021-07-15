import React from 'react'
// importing assets 
import searchIcon from "../../../../assets/home-assets/find-seller.svg"
import bag from "../../../../assets/home-assets/bag.svg"
import protection from "../../../../assets/home-assets/protection.svg"
import shiping from "../../../../assets/home-assets/shiping.svg"
//mui
import { useTranslation } from 'react-i18next';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import classes from './HowItIsWork.module.scss'
 
const HowItIsWork = ({ categories }) => {
    const { t } = useTranslation();
     
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
