import { configureStore } from "@reduxjs/toolkit";
import {themeSlice} from "@/redux/slices/themeSlice";
import {geolocationSlice} from "@/redux/slices/geolocationSlice";


export const store = configureStore({
    reducer: {
        theme: themeSlice.reducer,
        geolocation: geolocationSlice.reducer
    },
})


export type RootState = ReturnType<typeof store.getState>;
