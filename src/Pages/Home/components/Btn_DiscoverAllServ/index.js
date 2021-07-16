import React from 'react'
import { useTranslation } from 'react-i18next';
import Button from '@material-ui/core/Button';
// mui
 import styles from './Btn_DiscoverAllServ.module.scss'

const Btn_DiscoverAllServ = ({ categories }) => {
    const { t} = useTranslation();
     
     return (
        <>
            <div style={{ textAlign: "center" }}>
                <Button variant='outlined' className={styles.discover} color="primary">
                    <span className={styles.discovertext}>{t('discover_all_services')}</span>
                </Button>
            </div >
        </>
    )
}
export default Btn_DiscoverAllServ
