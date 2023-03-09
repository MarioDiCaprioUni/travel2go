import React from "react";
import {
    Button,
    CardContent,
    CardMedia,
    IconButton,
    TableBody,
    TableCell,
    TableContainer,
    TableRow
} from "@mui/material";
import {Actions, Content, Context, OverviewTable, Title} from "./LocationCard.styles";
import {BsThreeDots as DotsIcon} from "react-icons/bs";
import {
    convertCurrency,
    convertMeasurement,
    Currency,
    geolocation,
    getCurrencySymbol, getMeasurementUnit,
    Measurement
} from "@/utils/metrics";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";


export interface LocationCardProps {
    thumbnailLink: string;
    title: string;
    tooltip: string;
    dailyEuros: number;
    coords: geolocation.GeolocationPoint;
}

const LocationCard: React.FC<LocationCardProps> = (props) => {
    const { currency, measurement } = useSelector((state: RootState) => state.metrics);
    const { coords, isAvailable, isEnabled } = useSelector((state: RootState) => state.geolocation);

    let geolocationErrorMsg = undefined;
    if (!isAvailable) {
        geolocationErrorMsg = "Unavailable";
    } else if (!isEnabled) {
        geolocationErrorMsg = "Disabled";
    }

    return (
        <Context>

            <CardMedia
                title={props.tooltip}
                image={props.thumbnailLink}
                sx={{ height: 200 }}
            />

            <CardContent>

                <Title>
                    { props.title }
                </Title>

                <Content>

                    <TableContainer>
                        <OverviewTable>
                            <TableBody>

                                <TableRow>
                                    <TableCell>
                                        Cost per Day
                                    </TableCell>
                                    <TableCell>
                                        { Math.round(convertCurrency(props.dailyEuros, Currency.EURO, currency)) }
                                        { ' ' + getCurrencySymbol(currency) }
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell>
                                        Distance
                                    </TableCell>
                                    <TableCell>
                                        {
                                            geolocationErrorMsg?
                                                <Button color="error" variant="contained">
                                                    { geolocationErrorMsg }
                                                </Button>
                                                :
                                                !coords?
                                                    <Button color="primary" variant="contained">
                                                        Loading...
                                                    </Button>
                                                    :
                                                    Math.round(
                                                        convertMeasurement(
                                                            geolocation.geolocationDistance(coords, props.coords),
                                                            Measurement.METRIC, measurement
                                                        )
                                                    ) + ' ' + getMeasurementUnit(measurement)
                                        }
                                    </TableCell>
                                </TableRow>

                            </TableBody>
                        </OverviewTable>
                    </TableContainer>

                </Content>

            </CardContent>

            <Actions>
                <IconButton>
                    <DotsIcon />
                </IconButton>
            </Actions>

        </Context>
    );
}


export default LocationCard;
