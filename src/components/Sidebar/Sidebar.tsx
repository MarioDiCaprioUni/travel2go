import React from "react";
import {FormControl, FormControlLabel, Radio, RadioGroup, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import {Context} from "./Sidebar.styles";
import {setTheme} from "@/redux/slices/themeSlice";


interface SidebarProps {
    open: boolean;
    onClose?: () => void;
}


const Sidebar: React.FC<SidebarProps> = ({ open, onClose }) => {
    const theme = useSelector((state: RootState) => state.theme);
    const dispatch = useDispatch();

    function handleThemeSelection(event: React.ChangeEvent<HTMLInputElement>) {
        let mode = event.target.value as typeof theme;
        if (mode !== theme)
            dispatch(setTheme(mode));
    }

    return (
        <Context open={open} onClose={onClose} anchor="right">

            <Typography variant="h5" color="primary">
                Theme
            </Typography>

            <FormControl>
                <RadioGroup value={theme} onChange={handleThemeSelection}>

                    <FormControlLabel value="light" control={<Radio />} label="Light" />
                    <FormControlLabel value="dark" control={<Radio />} label="Dark" />
                    <FormControlLabel value="device" control={<Radio />} label="Device Default" />

                </RadioGroup>
            </FormControl>

        </Context>
    );
}


export default Sidebar;
