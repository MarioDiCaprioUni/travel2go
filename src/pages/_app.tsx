import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {Provider as ReduxProvider} from "react-redux";
import {CssBaseline} from "@mui/material";
import {ThemeProvider} from "@/theme";
import {store} from "@/redux/store";


// noinspection JSUnusedGlobalSymbols
export default function App({ Component, pageProps }: AppProps) {
    return (
        <ReduxProvider store={store}>

            <ThemeProvider>
                <CssBaseline />
                <Component {...pageProps} />
            </ThemeProvider>

        </ReduxProvider>
    );
}
