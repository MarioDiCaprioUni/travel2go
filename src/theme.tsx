import React, {ReactNode} from "react";
import {createTheme, useMediaQuery, ThemeProvider as MuiThemeProvider, CssBaseline} from "@mui/material";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";


const lightTheme = createTheme({
    typography: {
        fontFamily: `"Poppins", serif`
    },
    palette: {
        mode: 'light',
        primary: {
            main: '#5843ea',
        },
        secondary: {
            main: '#0efcc1',
        },
        error: {
            main: '#d32f2f',
        },
        warning: {
            main: '#ed6c02',
        },
        info: {
            main: '#0288d1',
        },
    }
});


const darkTheme = createTheme({
    typography: {
        fontFamily: `"Poppins", serif`
    },
    palette: {
        mode: 'dark',
        primary: {
            main: '#5843ea',
        },
        secondary: {
            main: '#0efcc1',
        },
        error: {
            main: '#d32f2f',
        },
        warning: {
            main: '#ed6c02',
        },
        info: {
            main: '#0288d1',
        },
    }
});


function useTheme() {
    const state = useSelector((state: RootState) => state.theme);
    const isDeviceDark = useMediaQuery("(prefers-color-scheme: dark)");

    if (state === "device") {
        return isDeviceDark? darkTheme : lightTheme;
    }

    return (state === 'dark')? darkTheme : lightTheme;
}


export const ThemeProvider: React.FC<{ children?: ReactNode }> = ({ children }) => {
    const theme = useTheme();

    return (
        <MuiThemeProvider theme={theme}>
            { typeof window !== 'undefined' && <CssBaseline /> }
            { children }
        </MuiThemeProvider>
    );
}
