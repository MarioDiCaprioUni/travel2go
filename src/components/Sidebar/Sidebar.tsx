import React from "react";
import {Divider, FormControl, FormControlLabel, IconButton, Radio, RadioGroup, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import {Context, Header, Section} from "./Sidebar.styles";
import {setTheme} from "@/redux/slices/themeSlice";
import {Currency, Measurement} from "@/utils/metrics";
import {setUserMetrics} from "@/redux/slices/metricsSlice";
import {IoClose as CloseIcon} from "react-icons/io5";


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

            <Header>
                <IconButton onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            </Header>

            <Divider />

            <Section>
                <Typography variant="h5" color="primary">
                    Currency
                </Typography>

                <FormControl>
                    <RadioGroup value={currency} onChange={handleCurrencySelection}>

                        <FormControlLabel value={Currency.EURO} control={<Radio />} label="Euro" />
                        <FormControlLabel value={Currency.USD} control={<Radio />} label="USD" />

                    </RadioGroup>
                </FormControl>
            </Section>

            <Divider />

            <Section>
                <Typography variant="h5" color="primary">
                    Measurements
                </Typography>

                <FormControl>
                    <RadioGroup value={measurement} onChange={handleMeasurementSelection}>

                        <FormControlLabel value={Measurement.METRIC} control={<Radio />} label="Metric" />
                        <FormControlLabel value={Measurement.IMPERIAL} control={<Radio />} label="Imperial" />

                    </RadioGroup>
                </FormControl>
            </Section>

            <Divider />

            <Section>
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
            </Section>

        </Context>
    );
}


export default Sidebar;
