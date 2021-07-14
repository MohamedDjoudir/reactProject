import { makeStyles } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';
// classNames
export const useStyles = (expanded) => {
    const { i18n } = useTranslation();
    return makeStyles(theme => ({
        inputFocused: {
            border: "1px solid #65c042 "
        },
        inputRoot: {
            color: '#4d4d4f',
            width: '100%',
            lineHeight: "38px",
            minHeight: "50px",
            maxHeight: "66px",
            fontFamily: "'Almarai',sans-serif",
            padding: i18n.language === 'ar' ? "0 15px 0 0" : "0 0 0 15px",
            [theme.breakpoints.down('sm')]: {
                height: "50px",
            },
        },
        inputInput: {
            // vertical padding + font size from searchIcon
            width: '100%',
            "&::placeholder": {
                lineHeight: "38px",
            }
        },
        search: {
            position: 'relative',
            backgroundColor: "#ffff",
            borderRadius: "2px",
            padding: "0",
            height: "66px",
            minHeight: "50px",
            width: '100%',
            '&:hover': {
                backgroundColor: "#eeee",
            },
            [theme.breakpoints.down('sm')]: {
                height: "50px",
            },
        },
        search_icon: {
            background: "#65c042",
            height: "66px",
            zIndex: "6544",
            minHeight: "50px",
            width: "66px",
            minWidth: "50px",
            maxHeight: "66px",
            margin: "0",
            justifyContent: "center",
            "&:focus": {
                background: "red !important",
            },
            [theme.breakpoints.down('sm')]: {
                height: "50px",
            },
        },
        chip: {
            fontFamily: "'Almarai',sans-serif",
            margin: "15px 10px",
            [theme.breakpoints.down('sm')]: {
                display: "none",
            },
        },
    }));
}