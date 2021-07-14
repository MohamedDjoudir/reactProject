import React from 'react'
import { useTranslation } from 'react-i18next';
import Button from '@material-ui/core/Button';
// mui
 import {useStyles} from './style'

const Btn_DiscoverAllServ = ({ categories }) => {
    const { t} = useTranslation();
     
    const classes = useStyles()();
    return (
        <>
            <div style={{ textAlign: "center" }}>
                <Button variant='outlined' className={classes.discover} color="primary">
                    <span className={classes.discovertext}>{t('discover_all_services')}</span>
                </Button>
            </div >
        </>
    )
}
export default Btn_DiscoverAllServ
