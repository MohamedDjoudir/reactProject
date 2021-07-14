import React from 'react'
import { useTranslation } from 'react-i18next';
// importing assets 
// mui
import Button from '@material-ui/core/Button';
 import {useStyles} from './style'

const FindTheRightPerson = ({ services }) => {
    const { t } = useTranslation();
     
    const classes = useStyles()();
    return (
        <>
            <div className={classes.Find_the_right_person}>
                <div style={{ position: "relative" }}>
                    <div className={classes.person_textwrapper}>
                        <div className={classes.Find_the_right_person_text}>
                            {t("Find_the_right_person")}
                        </div>
                        <div>
                            <div style={{ textAlign: "center" }}>
                                <Button variant='contained' className={classes.viewBTN} style={{ fontSize: "25px" }} color="primary">
                                    <span className={classes.discovertext}>{t('discover_all_services')}</span>
                                </Button>
                            </div >
                        </div>
                    </div>
                    <div className={classes.green_circle_wrapper}>
                        <div className={classes.green_circle}> </div>
                    </div>
                    <div className={classes.green_circle_wrapper22}>
                        <div className={classes.green_circle_wrapper2}>
                            <div className={classes.green_circle2}> </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default FindTheRightPerson
