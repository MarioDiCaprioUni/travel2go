import React from "react";
import {Card, CardActions, CardContent, CardMedia, Chip, Typography} from "@mui/material";


interface LocationCardProps {
    thumbnailLink: string;
    title: string;
    tooltip: string;
    tags: string[];
}

const LocationCard: React.FC<LocationCardProps> = (props) => {
    return (
        <Card variant="outlined" sx={{ width: 300, height: 415, position: 'relative' }}>

            <CardMedia
                title={props.tooltip}
                image={props.thumbnailLink}
                sx={{ height: 200 }}
            />

            <CardContent>

                <Typography gutterBottom variant="h5" component="div">
                    { props.title }
                </Typography>

                <Typography variant="body2">

                </Typography>

            </CardContent>

            <CardActions sx={{ position: 'absolute', left: 0, bottom: 0, padding: 2 }}>
                { props.tags.map(tag => <Chip label={tag} />) }
            </CardActions>

        </Card>
    );
}


export default LocationCard;
