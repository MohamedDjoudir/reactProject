import React from 'react'
import { useTranslation } from 'react-i18next';
// importing assets 
// mui
import ContainedBTN from '../../../../components/Shared/Contained_BTN';
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
                        <ContainedBTN textID={'GetStarted'} />
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
