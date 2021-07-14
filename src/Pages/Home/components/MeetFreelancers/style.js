import { makeStyles } from '@material-ui/styles';
 // classNames
export const useStyles = (expanded) => {
     return makeStyles(theme => ({
        servicesWrapper: {
            width: "100%",
            maxWidth: "1400px",
            overflow: "hidden",
        },
        FreelancerCardWrapprer: {
            minWidth: "350px",
            width: "350px",
            maxWidth: "350px",
            [theme.breakpoints.down('sm')]: {
                margin: "20px auto",
                minWidth: "350px",
                width: "350px",
                maxWidth: "350px"
            },
        },
        gridWrapper: {
            padding: "20px 50px",
            position: "relative",
            borderRadius: "10px",
            margin: "35px auto 0 auto",
            width: "100%",
            maxWidth: "1400px",
            [theme.breakpoints.down('sm')]: {
                padding: "10px",
                position: "relative",
                borderRadius: "7px",
                margin: "35px auto 0 auto",
                width: "100%",
                maxWidth: "1400px"
            },
        },
        howItWorkItemTitle: {
            margin: "20px auto",
            textAlign: "center",
            lineHeight:"35px",
            fontFamily: "'Almarai',sans-serif",
            fontSize: "30px",
            color: "#303030",
            [theme.breakpoints.down('xs')]: {
                fontSize: "23px",
             },
        },
    }));
}