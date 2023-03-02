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
    thumbnailLink: 'https://strongcitiesnetwork.org/en/wp-content/uploads/sites/5/2017/11/Berlin-Nikolaiviertel-scaled.jpg',
    title: 'Berlin, Germany',
    tooltip: 'Berlin',
    tags: ['Germany', 'European', 'Culture']
}
