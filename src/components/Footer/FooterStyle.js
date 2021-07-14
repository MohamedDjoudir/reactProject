import { makeStyles } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';
// classNames
export const useStyles = (expanded) => {
    const { i18n } = useTranslation();
    return makeStyles(theme => ({
        footer: {
            height: "450px",
            maxHeight: "450px",
            margin: "10px auto",
            display: "flex",
            transition: "all 400ms",
            flexDirection: "row",
            padding: "7rem 5rem",
            [theme.breakpoints.down('sm')]: {
                flexDirection: "column",
                height: expanded.length !== 0 ? "430px" : "300px",
                justifyContent: "flex-start",
                padding: "3rem 2rem",
            },
        },
        TreeView: {
            width: "35%",
            backgroundColor: 'transparent !important',
            [theme.breakpoints.down('sm')]: {
                width: 0
            },
        },
        Treeitem: {
            marginTop: "5px",
            color: "#303030",
            backgroundColor: 'transparent !important',
            whiteSpace: "nowrap",
            '&:hover': {
                color: "#0fb3f0",
                backgroundColor: 'transparent !important',
                opacity: "1"
            }
        },
        TreeitemForn: {
            fontFamily: "'Almarai',sans-serif",
            whiteSpace: "nowrap",
        },
        label: {
            fontSize: "22px",
            color: "#303030",
            borderBottom: "3px solid #0fb3f0",
            whiteSpace: "nowrap",
            width: "25px",
            fontFamily: "'Almarai',sans-serif",
            [theme.breakpoints.down('sm')]: {
                fontSize: "25px",
            },
        },
        socialMediaWrapper: {
            display: "flex",
            width: "40%",
            margin: "120px auto 20px auto",
            alignItems: "center",
            justifyContent: "center",
            [theme.breakpoints.down('sm')]: {
                width: "100%",
                margin: "0px auto 20px auto",
            },
        },
        socialMediaIconWrapper: {
            margin: "0 1rem",
            borderRadius: "50%",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer"
        },
        socialMediaIcon: {
            fontSize: "clamp(1.8rem,calc(1.8rem + 3vw),3rem)",
            fill: "rgb(200,200,200)",
        },
        bottomBarr: {
            display: "flex",
            width: "100%",
            margin: "0px auto",
            alignItems: "center",
            padding: "15px 30px",
            flexDirection: "row",
            justifyContent: "space-between",
            [theme.breakpoints.down('sm')]: {
                flexDirection: "column"
            },
        },
        TreeViewMobile: {
            display: "none",
            [theme.breakpoints.down('sm')]: {
                display: "block",
            },
        },
        TreeViewDesk: {
            display: "flex",
            width: "100%",
            position: "relative",
            right: i18n.language === "ar" ? "60%" : "43%",
            transform: "translateX(50%)",
            [theme.breakpoints.down('sm')]: {
                display: "none",
            },
        },
        creditCardsWraper: {
            display: "flex",
            margin: "10px auto",
            alignItems: "center",
            justifyContent: "flex-start",
        },
        creditCardsIconWraper: {
            margin: " 0 1rem"
        },
        creditCardsIcon: {
            width: "clamp(25px,calc(25px + 1vw),40px)"
        },
        forlansoLogo: {
            whiteSpace: "nowrap",
        },
        grow: {
            flexGrow: "1"
        },
        iconTreeDes: {
            transform: i18n.language === "ar" ? "rotateZ(90deg)" : "rotateZ(-90deg)"
        },
        iconTreeMob: {
            transform: i18n.language === "ar" ? "rotateZ(180deg)" : "rotateZ(0)"
        }
    }));
}