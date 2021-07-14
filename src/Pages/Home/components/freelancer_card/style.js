import { makeStyles } from '@material-ui/styles';
// classNames
export const useStyles = (expanded) => {
     return makeStyles(theme => ({
        Avatar: {
            borderRadius: "50%",
            width: "130px",
            height: "130px",
            position: "absolute",
            top: "0",
            left: "50%",
            transform: "translate(-50%,-50%)",
            margin: "0 auto"
        },
        freelancer_name: {
            textAlign: "center",
            margin: "60px auto 0",
            fontFamily: "'Cairo',sans-serif",
            fontSize: "25px"
        }, 
        freelancer_experience: {
            color: "#b8b8b9",
            textAlign: "center",
            fontFamily: "'Cairo',sans-serif",
            fontSize: "12px"
        },
        freelancer_about: {
            color: "#212529",
            fontFamily: "'Cairo',sans-serif",
            fontSize: "18px",
            margin: "23px auto 0",
            height: "120px",
            overflow: "hidden",
            lineHeight: "19px"
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