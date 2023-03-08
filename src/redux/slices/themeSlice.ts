import {createSlice, PayloadAction} from "@reduxjs/toolkit";


type ThemeState = "light" | "dark" | "device";

let initialState: ThemeState = "device";
if (typeof window !== 'undefined') {
    let tmp = localStorage.getItem("theme") as ThemeState | null;
    if (tmp) {
        initialState = tmp;
    }
}


export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {

        setTheme: (_state, payload: PayloadAction<ThemeState>) => {
            if (typeof window !== 'undefined') {
                localStorage.setItem('theme', payload.payload);
            }
            return payload.payload;
        }

    }
});

export const { setTheme } = themeSlice.actions;
