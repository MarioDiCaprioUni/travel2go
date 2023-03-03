import React from "react";
import {Card, CardActions, CardContent, CardMedia, Chip, Typography} from "@mui/material";


export interface LocationCardProps {
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

            <CardActions sx={{ position: 'absolute', left: 0, bottom: 0, padding: 2, display: 'flex', flexWrap: 'wrap' }}>
                { props.tags.map(tag => <Chip key={tag} label={tag} sx={{ margin: '5px', padding: '5px' }} />) }
            </CardActions>

        </Card>
    );
}


export default LocationCard;
