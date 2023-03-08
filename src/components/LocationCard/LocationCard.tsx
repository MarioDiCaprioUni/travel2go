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
import {Content, Context, OverviewTable, Actions, Title} from "./LocationCard.styles";
import {BsThreeDots as DotsIcon} from "react-icons/bs";
import {geolocation} from "@/utils/metrics";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";


export interface LocationCardProps {
    thumbnailLink: string;
    title: string;
    tooltip: string;
    dailyUSD: number;
    coords: geolocation.GeolocationPoint;
}

const LocationCard: React.FC<LocationCardProps> = (props) => {
    const { coords, isAvailable, isEnabled } = useSelector((state: RootState) => state.geolocation);

    let geolocationErrorMsg = undefined;
    if (!isAvailable) {
        geolocationErrorMsg = "Geolocation unavailable";
    } else if (!isEnabled) {
        geolocationErrorMsg = "Geolocation disabled";
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
                                        { props.dailyUSD } USD
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
                                                    Math.round(geolocation.geolocationDistance(coords, props.coords)) + " km"
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
