import { makeStyles } from '@material-ui/styles';
 // classNames
export const useStyles = (expanded) => {
     return makeStyles(theme => ({
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
    }));
}