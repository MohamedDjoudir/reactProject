import React from 'react'
import { useTranslation } from 'react-i18next';
// importing assets 
// mui
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
const FindTheRightPerson = ({ services }) => {
    const { t } = useTranslation();
    //styling
    const useStyles = makeStyles(theme => ({
        green_circle: {
            height: "100%",
            width: "100%",
            background: "transparent linear-gradient(180deg, #b6d43f, rgba(182,212,63,0)) 0 0 no-repeat padding-box",
            position: "absolute",
            bottom: "250px",
            top: "0",
            transform: "translate(50%,50%) rotate(180deg)",
            borderRadius: "50%",
            reight: "0",
            display: "block",
            [theme.breakpoints.down('sm')]: {
                display: "none"
            },
        },
        green_circle_wrapper: {
            width: "30vw",
            height: "30vw",
            maxHeight: "500px",
            maxWidth: "500px",
            overflow: "hidden",
            position: "absolute",
            bottom: "0",
            right: "0",
        },
        green_circle2: {
            height: "100%",
            width: "100%",
            background: "transparent linear-gradient(180deg,#00aeef,rgba(0,174,239,0)) 0 0 no-repeat padding-box;",
            position: "absolute",
            bottom: "250px",
            top: "0",
            left: "0",
            display: "block",
            transform: "translate(-50%,30%) rotate(250deg)",
            borderRadius: "50%",
            [theme.breakpoints.down('sm')]: {
                display: "none"
            },
        },
        green_circle_wrapper2: {
            width: "100%",
            height: "100%",
            maxHeight: "1200px",
            maxWidth: "900px",
            overflow: "hidden",
            position: "relative",
            bottom: "0",
            left: "0",
        },
        green_circle_wrapper22: {
            width: "70vw",
            height: "420px",
            maxHeight: "1000px",
            maxWidth: "900px",
            overflow: "hidden",
            position: "absolute",
            bottom: "0",
            left: "0",
        },
        Find_the_right_person: {
            height: "420px",
            width: "100vw",
            maxWidth: "1400px",
            background: "#034057",
            overflow: "hiddent",
            marginTop: "50px"
        },
        person_textwrapper: {
            height: "420px",
            display: "flex",
            margin: "0 auto",
            width: "30%",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            flexDirection: "column",
            [theme.breakpoints.down('md')]: {
                width: "100%",
            },
        },
        Find_the_right_person_text: {
            height: "80px",
            width: "100%",
            color: "white",
            fontSize: "30px",
            fontFamily: "'Almarai',sans-serif",
            position: "relative",
        },
        viewBTN: {
            background: "#65c042",
            color: "#fff",
            borderRadius: "10px",
            fontFamily: "'Cairo',sans-serif",
            paddingTop: "10px",
            paddingBottom: "10px",
            "&:hover": {
                background: "#92d878",
            }
        }
    }))
    const classes = useStyles();
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
