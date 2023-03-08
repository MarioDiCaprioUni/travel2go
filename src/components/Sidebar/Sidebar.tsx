import React from "react";
import {FormControl, FormControlLabel, Radio, RadioGroup, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import {Context} from "./Sidebar.styles";
import {setTheme} from "@/redux/slices/themeSlice";
import {Currency, Measurement} from "@/utils/metrics";
import {setUserMetrics} from "@/redux/slices/metricsSlice";


interface SidebarProps {
    open: boolean;
    onClose?: () => void;
}


const Sidebar: React.FC<SidebarProps> = ({ open, onClose }) => {
    const theme = useSelector((state: RootState) => state.theme);
    const { currency, measurement } = useSelector((state: RootState) => state.metrics);
    const dispatch = useDispatch();

    function handleCurrencySelection(event: React.ChangeEvent<HTMLInputElement>) {
        let newCurrency = event.target.value as Currency;
        if (newCurrency !== currency)
            dispatch(setUserMetrics({
                currency: newCurrency,
                measurement
            }));
    }

    function handleMeasurementSelection(event: React.ChangeEvent<HTMLInputElement>) {
        let newMeasurement = event.target.value as Measurement;
        if (newMeasurement !== measurement)
            dispatch(setUserMetrics({
                currency,
                measurement: newMeasurement
            }));
    }

    function handleThemeSelection(event: React.ChangeEvent<HTMLInputElement>) {
        let mode = event.target.value as typeof theme;
        if (mode !== theme)
            dispatch(setTheme(mode));
    }

    return (
        <Context open={open} onClose={onClose} anchor="right">

            <Typography variant="h5" color="primary">
                Currency
            </Typography>

            <FormControl>
                <RadioGroup value={currency} onChange={handleCurrencySelection}>

                    <FormControlLabel value={Currency.EURO} control={<Radio />} label="Euro" />
                    <FormControlLabel value={Currency.USD} control={<Radio />} label="USD" />

                </RadioGroup>
            </FormControl>


            <Typography variant="h5" color="primary">
                Measurements
            </Typography>

            <FormControl>
                <RadioGroup value={measurement} onChange={handleMeasurementSelection}>

                    <FormControlLabel value={Measurement.METRIC} control={<Radio />} label="Metric" />
                    <FormControlLabel value={Measurement.IMPERIAL} control={<Radio />} label="Imperial" />

                </RadioGroup>
            </FormControl>
            

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
