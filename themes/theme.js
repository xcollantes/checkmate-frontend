// Overrides default Material UI theme 
// https://mui.com/customization/default-theme
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
    palette: {
        // primary: {
        //     main: '#ab47bc',
        // },
    },
    typography: {
        fontFamily: [
            '-apple-system', 'BlinkMacSystemFont',
            '"Open Sans"', 'Roboto', 'Oxygen', 'Arial', 'Verdana', 'Georgia', 'Courier',
        ].join(','),
        body1: {
            fontFamily: [
                'Roboto', 'Arial', 'Verdana', 'Georgia', 'Courier',
            ].join(','),
        },
    },
})

export default theme