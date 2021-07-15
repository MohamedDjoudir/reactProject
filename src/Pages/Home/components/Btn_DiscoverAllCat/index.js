import React from 'react'
import { useTranslation } from 'react-i18next';
import Button from '@material-ui/core/Button';
// mui
 import classes from './Btn_DiscoverAllCat.module.scss'


const Btn_DiscoverAllCat = ({ categories }) => {
    const { t} = useTranslation();
    
     return (
        <>
            <div style={{ textAlign: "center" }}>
                <Button variant='outlined' className={classes.discover} color="primary">
                    <span className={classes.discovertext}>{t('discover')}</span>
                </Button>
            </div >
        </>
    )
}
export default Btn_DiscoverAllCat
