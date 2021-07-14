import { makeStyles } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';
// classNames
export const useStyles = (expanded) => {
    const { i18n } = useTranslation();
    return makeStyles(theme => ({
        servicesWrapper: {
            width: "100%",
            maxWidth: "1400px",
            overflow: "hidden",
        },
        serviceCardWrapprer: {
            minWidth: "25%",
            width: "25%",
            maxWidth: "25%",
            [theme.breakpoints.down('md')]: {
                width: "40%",
                minWidth: "40%",
            },
            [theme.breakpoints.down('xs')]: {
                width: "95vw",
                minWidth: "95vw",
            },
        },
        gtidWrapper: {
            padding: "20px 50px",
            position: "relative",
            borderRadius: "10px",
            margin: "35px auto 0 auto",
            width: "100%",
            maxWidth: "1400px",
            [theme.breakpoints.down('sm')]: {
                padding: "10px",
                borderRadius: "7px",
                margin: "35px auto 0 auto",
            },
        },
        howItWorkItemTitle: {
            width: "max-content",
            margin: "3rem auto 0rem",
            fontFamily: "'Almarai',sans-serif",
            fontSize: "30px",
            color: "#303030",
            [theme.breakpoints.down('xs')]: {
                fontSize: "23px",
                textAlign: i18n.language === 'ar' ? "right" : "left",
            },
        },
    }));
}