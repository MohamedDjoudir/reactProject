import { makeStyles } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';
// classNames
export const useStyles = (expanded) => {
    const { i18n } = useTranslation();
    return makeStyles(theme => ({
        featuresText: {
            fontSize: "1.125rem",
            color: "#303030",
            fontFamily: "'Almarai',sans-serif",
            textAlign: 'center',
            maxHeight: "360px",
            overflow: "Hidden",
            [theme.breakpoints.down('')]: {
                maxHeight: "",
                textAlign: i18n.language === 'ar' ? "right" : "left",
            },
        },
        howItWorkItemWraper: {
            padding: "20px 0",
            background: "#e6f7fd",
            display: "flex",
            [theme.breakpoints.down('xs')]: {
                display: "block",
                padding: "20px 10px",
            },
        },
        howItWorkWrapper: {
            background: "#e6f7fd",
            padding: "20px 0",
        },
        howItWorkItemTitle: {
            width: "max-content",
            margin: "20px auto",
            fontFamily: "'Almarai',sans-serif",
            fontSize: "30px",
            color: "#303030",
            [theme.breakpoints.down('xs')]: {
                fontSize: "23px",
                textAlign: i18n.language === 'ar' ? "right" : "left",
            },
        },
        howItWorkItemIcon: {
            background: "#70d549",
            marginLeft: "1.7rem",
            marginRight: "1.3rem",
            width: "130px",
            height: "130px",
            padding: "33px",
            [theme.breakpoints.down('md')]: {
                width: "50px",
                height: "50px",
                padding: "13px",
            },
        },
        featuresTextSec: {
            fontFamily: "'Almarai',sans-serif",
            lineHeight: "27px",
            textAlign: 'center',
            fontSize: "16px",
            [theme.breakpoints.down('md')]: {
                textAlign: i18n.language === 'ar' ? "right" : "left",
                fontSize: "13px",
            },
        },
        howItWorkItemWrapper: {
            flexDirection: "column",
            [theme.breakpoints.down('md')]: {
                flexDirection: "",
            },
        },
    }));
}