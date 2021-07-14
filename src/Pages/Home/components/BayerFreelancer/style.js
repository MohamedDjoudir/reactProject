import { makeStyles } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';
// classNames
export const useStyles = () => {
    const { i18n } = useTranslation();
    return makeStyles(theme => ({
        featuresText: {
            fontSize: "1.125rem",
            color: "#303030",
            fontFamily: "'Almarai',sans-serif",
            maxHeight: "360px",
            overflow: "Hidden",
            textAlign: i18n.language === 'ar' ? "right" : "left",
            [theme.breakpoints.down('sm')]: {
                maxHeight: "",
            },
        },
        ListItem: {
            [theme.breakpoints.down('sm')]: {
                width: "max-content",
                paddingRight: "0px !important",
                paddingLeft: "0px !important"
            },
            [theme.breakpoints.down('xs')]: {
                width: "90%",
                paddingRight: "0px !important",
                paddingLeft: "0px !important"
            },
        },
        bayerFreelancerWrapper: {
            display: "flex",
            alignItems: "flex-start",
            background: "#fff",
            justifyContent: "space-around",
            margin: "3rem",
            borderRadius: "1px",
            width: "100%",
            [theme.breakpoints.down('sm')]: {
                margin: "0",
                display: "block",
                alignItems: "",
                justifyContent: "",
            },
        },
        bayerFreelancerWrapper2: {
            background: "#fcfcfc",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
        },
        features: {
            margin: "2rem auto 1rem",
            background: "#fff",
            maxWidth: "360px",
            height: "280px",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            [theme.breakpoints.down('sm')]: {
                display: "block",
                justifyContent: "",
                margin: "1rem 7rem 0rem",
                height: "max-content",

            },
            [theme.breakpoints.down('xs')]: {
                display: "block",
                justifyContent: "",
                margin: "1rem 1rem 0rem",
                height: "max-content",

            },
        },
        sign_up_like_freelanser_imgWrapper: {
            display: "block",
            margin: "3.5rem auto",
            width: "30vw",
            maxWidth: "450px",
            [theme.breakpoints.down('sm')]: {
                margin: "0 auto",
                width: "90vw",
            },
        },
        sign_up_like_freelanser: {
            width: "100%",
        },
    }));
}