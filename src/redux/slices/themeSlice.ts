import {createSlice, PayloadAction} from "@reduxjs/toolkit";


type ThemeState = "light" | "dark" | "device";


export const themeSlice = createSlice({
    name: "theme",
    initialState: "device" as ThemeState,
    reducers: {

        setTheme: (_state, payload: PayloadAction<ThemeState>) => {
            return payload.payload;
        }

    }
});

export const { setTheme } = themeSlice.actions;
