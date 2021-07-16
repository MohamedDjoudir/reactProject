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
import styles from './HowItIsWork.module.scss'
 
const HowItIsWork = ({ categories }) => {
    const { t } = useTranslation();
     
     return (
        <>
            <div className={styles.howItWorkWrapper} >
                <div className={styles.howItWorkItemTitle}>
                    {t('how_it_work')}
                </div>
                <div className={styles.howItWorkItemWraper}>
                    <ListItem className={styles.howItWorkItemWrapper}>
                        <ListItemAvatar>
                            <Avatar src={searchIcon} className={styles.howItWorkItemIcon} />
                        </ListItemAvatar>
                        <div>
                            <h1 className={styles.featuresText}>{t('find_the')}</h1>
                            <div className={styles.featuresTextSec}>{t('find_the_desc')}</div>
                        </div>
                    </ListItem>
                    <ListItem className={styles.howItWorkItemWrapper}>
                        <ListItemAvatar>
                            <Avatar src={bag} className={styles.howItWorkItemIcon} />
                        </ListItemAvatar>
                        <div>
                            <h1 className={styles.featuresText}>{t('order')}</h1>
                            <div className={styles.featuresTextSec}>{t('order_desc')}</div>
                        </div>
                    </ListItem>
                    <ListItem className={styles.howItWorkItemWrapper}>
                        <ListItemAvatar>
                            <Avatar src={protection} className={styles.howItWorkItemIcon} />
                        </ListItemAvatar>
                        <div className={styles.featuresText}>
                            <h1 className={styles.featuresText}>{t('money')}</h1>
                            <div className={styles.featuresTextSec} >{t('money_desc')}</div>
                        </div>
                    </ListItem>
                    <ListItem className={styles.howItWorkItemWrapper}>
                        <ListItemAvatar>
                            <Avatar src={shiping} className={styles.howItWorkItemIcon} />
                        </ListItemAvatar>
                        <div className={styles.featuresText}>
                            <h1 className={styles.featuresText}>{t('receive')}</h1>
                            <div className={styles.featuresTextSec} >{t('receive_desc')}</div>
                        </div>
                    </ListItem>
                </div>
            </div>
        </>
    )
}
export default HowItIsWork
