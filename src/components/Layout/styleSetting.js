import { createTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

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