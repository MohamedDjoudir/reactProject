import React from 'react'
import { useTranslation } from 'react-i18next';
// importing assets 
// mui
import Button from '@material-ui/core/Button';
 import styles from './FindTheRightPers.module.scss'

const FindTheRightPerson = ({ services }) => {
    const { t } = useTranslation();
     
     return (
        <>
            <div className={styles.Find_the_right_person}>
                <div style={{ position: "relative" }}>
                    <div className={styles.person_textwrapper}>
                        <div className={styles.Find_the_right_person_text}>
                            {t("Find_the_right_person")}
                        </div>
                        <div>
                            <div style={{ textAlign: "center" }}>
                                <Button variant='contained' className={styles.viewBTN} style={{ fontSize: "25px" }} color="primary">
                                    <span className={styles.discovertext}>{t('discover_all_services')}</span>
                                </Button>
                            </div >
                        </div>
                    </div>
                    <div className={styles.green_circle_wrapper}>
                        <div className={styles.green_circle}> </div>
                    </div>
                    <div className={styles.green_circle_wrapper22}>
                        <div className={styles.green_circle_wrapper2}>
                            <div className={styles.green_circle2}> </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default FindTheRightPerson
