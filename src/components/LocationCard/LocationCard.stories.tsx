// noinspection JSUnusedGlobalSymbols

import { Meta, StoryFn } from "@storybook/react";
import LocationCard from "./LocationCard";


export default {
    title: 'LocationCard',
    component: LocationCard
} as Meta<typeof LocationCard>;


export const Main: StoryFn<typeof LocationCard> = (props) => {
    return (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <LocationCard {...props} />
        </div>
    );
}

Main.args = {
    title: "Berlin, Germany",
    tooltip: "Brandenburg Gate",
    thumbnailLink: "https://images.unsplash.com/photo-1587330979470-3595ac045ab0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJlcmxpbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    dailyEuros: 3,
    coords: {
        lat: 52.5200,
        lon: 13.4050
    }
}
