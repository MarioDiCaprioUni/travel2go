import React from "react";
import {CardContent, CardMedia, IconButton, TableBody, TableCell, TableContainer, TableRow} from "@mui/material";
import {Content, Context, OverviewTable, Actions, Title} from "./LocationCard.styles";
import {BsThreeDots as DotsIcon} from "react-icons/bs";


export interface LocationCardProps {
    thumbnailLink: string;
    title: string;
    tooltip: string;
    dailyUSD: number;
    trivagoLink: string;
    tags: string[];
}

const LocationCard: React.FC<LocationCardProps> = (props) => {
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
                                        123 km
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
