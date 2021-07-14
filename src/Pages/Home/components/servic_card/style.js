import { makeStyles } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';
// classNames
export const useStyles = (expanded) => {
    const { i18n } = useTranslation();
    return makeStyles(theme => ({
        user_name: {
            fontSize: "15px",
            color: "#303030",
            fontFamily: "'Almarai',sans-serif",
            lineHeight:"30px",
            textAlign: i18n.language === 'ar' ? "right" : "left",
            overflow: "Hidden",
            fontWeight: "400",
            width: "100%",
            whiteSpace: "nowrap",
        },
        user_name_job: {
            fontSize: "10px",
            color: "#303030",
            fontFamily: "'Almarai',sans-serif",
            textAlign: i18n.language === 'ar' ? "right" : "left",
            overflow: "Hidden",
            marginTop: "-7px",
            lineHeight: "15px",
            minHeight: "20px",
            maxHeight: "20px",
            height: "20px"
        },
        CardContent: {
            padding: "10px",
            paddingLeft: "5px",
            paddingRight: "5px",
        },
        ListItem: {
            padding: "10px",
            paddingLeft: "5px",
            paddingRight: "5px",
        },
        jobName: {
            minHeight: "70px",
            maxHeight: "70px",
            paddingLeft: "10px",
            paddingRight: "10px",
            height: "70px",
            overflow: "hidden",
            fontSize: "16px",
            fontFamily: "'Cairo',sans-serif",
        },
        soldbar: {
            fontSize: "16px",
            fontFamily: "'Cairo',sans-serif",
            color: '#00AEEF',
            display: "flex",
            justifyContent: "space-between",
            padding: "0 10px"
        },
        rating: {
            width: "40%",
            minWidth: "max-content",
            display: "flex",
            justifyContent: "space-between"
        },
        ViewBtn: {
            background: "#65c042",
            color: "#fff",
            marginTop: "-10px",
            borderRadius: "10px",
            fontFamily: "'Cairo',sans-serif",
            paddingTop: "10px",
            paddingBottom: "10px",
            "&:hover": {
                background: "#92d878",
            }
        }
    }));
}