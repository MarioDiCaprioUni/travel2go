import { configureStore } from "@reduxjs/toolkit";
import {themeSlice} from "@/redux/slices/themeSlice";
import {geolocationSlice} from "@/redux/slices/geolocationSlice";
import {metricsSlice} from "@/redux/slices/metricsSlice";


export const store = configureStore({
    reducer: {
        theme: themeSlice.reducer,
        geolocation: geolocationSlice.reducer,
        metrics: metricsSlice.reducer,
    },
})


export type RootState = ReturnType<typeof store.getState>;
