import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {geolocation} from "@/utils/metrics";


interface GeolocationState {
    coords?: geolocation.GeolocationPoint;
    isAvailable: boolean;
    isEnabled: boolean;
}

const initialState: GeolocationState = {
    coords: undefined,
    isAvailable: false,
    isEnabled: false
}


export const geolocationSlice = createSlice({
    name: "geolocation",
    initialState,
    reducers: {

        setGeolocationState: (_state, action: PayloadAction<GeolocationState>) => {
            return action.payload;
        }

    }
});


export const {setGeolocationState} = geolocationSlice.actions;
