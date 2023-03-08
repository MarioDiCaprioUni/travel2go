import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Currency, Measurement} from "@/utils/metrics";


interface UserMetrics {
    currency: Currency;
    measurement: Measurement;
}

let initialState: UserMetrics = {
    currency: Currency.EURO,
    measurement: Measurement.METRIC
}

export const metricsSlice = createSlice({
    name: "metrics",
    initialState,
    reducers: {

        setUserMetrics: (_state, action: PayloadAction<UserMetrics>) => {
            return action.payload;
        }

    }
});

export const {setUserMetrics} = metricsSlice.actions;