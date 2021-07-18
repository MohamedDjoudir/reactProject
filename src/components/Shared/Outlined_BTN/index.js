import React from 'react'
import { useTranslation } from 'react-i18next';
import Button from '@material-ui/core/Button';
// mui
import styles from './Outlined_BTN.module.scss'


const OutlinedBTN = ({ textID, onClick }) => {
    const { t } = useTranslation();

    return (
        <>
            <div style={{ textAlign: "center" }}>
                <Button
                    variant='outlined'
                    className={styles.discover}
                    color="primary"
                    onClick={onClick}
                >
                    <span className={styles.discovertext}>
                        {t(textID)}
                    </span>
                </Button>
            </div >
        </>
    )
}
export default OutlinedBTN
