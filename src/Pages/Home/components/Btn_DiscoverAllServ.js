import React from 'react'
import { useTranslation } from 'react-i18next';
import Button from '@material-ui/core/Button';

// mui

import { makeStyles } from '@material-ui/core/styles';

const Btn_DiscoverAllServ = ({ categories }) => {
    const { t} = useTranslation();

    //styling
    const useStyles = makeStyles(theme => ({
        categories: {
            fontSize: "27px",
            width: "max-content",
            margin: "0 auto",
            fontFamily: "'Almarai',sans-serif",
            color: "#303030",
            fontWeight: "400"
        },
        sliderWrapper: {
            margin: "2rem auto ",
        },
        discover: {
            textTransform: "none",
            padding: "5px 2rem",
            fontFamily: "'Almarai',sans-serif",
            margin: "2rem auto",
            fontSize: "25px"
        },
    }))
    const classes = useStyles();

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
