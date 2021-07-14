import { createTheme, makeStyles} from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';


export const useStyles = effect => makeStyles({
    root: {
        transition: "all 300ms",
        opacity: effect ? "1" : "0",
        maxWidth: "1400px",
        margin: "0 auto",
        background: "#fff",
        width:"100vw",
        overflow:"hidden"
    },
    WhatsAppIconWrapper: {
        position: "fixed",
        bottom: "6vh",
        right: "5vw",
        zIndex:"5556",
    },
    WhatsAppIcon: {
        fontSize: "clamp(3.5rem,calc(1.5rem + 3vw),4rem)",
        background: "#25d366",
        fill: "white",
        borderRadius: "50%",
        padding: "15px",
        boxShadow: "1px 1.5px 2px rgba(0,0,0,0.3) "
    },
});

export const theme = createTheme({
     palette: {
        primary: {
            main: "#65c042",
        },
        secondary: {
            main: green[500],
        },
    },
});