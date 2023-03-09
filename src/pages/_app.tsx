import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import React, {ReactNode, useEffect} from "react";
import {Provider as ReduxProvider, useDispatch} from "react-redux";
import {ThemeProvider} from "@/theme";
import {store} from "@/redux/store";
import {useGeolocated} from "react-geolocated";
import {setGeolocationState} from "@/redux/slices/geolocationSlice";


const GeolocationProvider: React.FC<{ children?: ReactNode }> = ({ children }) => {
    const { coords, isGeolocationAvailable, isGeolocationEnabled } = useGeolocated();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setGeolocationState({
            coords: coords? {
                lat: coords.latitude,
                lon: coords.longitude
            } : undefined,
            isEnabled: isGeolocationEnabled,
            isAvailable: isGeolocationAvailable
        }));
    }, [coords, isGeolocationEnabled, isGeolocationAvailable]);

    return <>{ children }</>;
}


// noinspection JSUnusedGlobalSymbols
export default function App({ Component, pageProps }: AppProps) {
    return (
        <ReduxProvider store={store}>

            <ThemeProvider>

                <GeolocationProvider>

                    <Component {...pageProps} />

                </GeolocationProvider>

            </ThemeProvider>

        </ReduxProvider>
    );
}
