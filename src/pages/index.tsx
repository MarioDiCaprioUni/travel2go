import {NextPage} from "next";
import Navbar from "@/components/Navbar/Navbar";
import {CardPanel, Content} from "@/styles/Index.styles";
import LocationCard, {LocationCardProps} from "@/components/LocationCard/LocationCard";
import Head from "next/head";


const locations: Array<LocationCardProps> = [
    {
        title: "Sicily, Italy",
        tooltip: "Sicily",
        thumbnailLink: "https://images.unsplash.com/photo-1524942434100-2b3f200f5b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        tags: ["Italy", "Sea", "Food"]
    },
    {
        title: "Rome, Italy",
        tooltip: "The Colosseum",
        thumbnailLink: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cm9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        tags: ["Italy", "History", "Colosseum", "Vatican"]
    },
    {
        title: "Chicago, Illinois",
        tooltip: "The Cloud Gate",
        thumbnailLink: "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2hpY2Fnb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        tags: ["USA", "Cloud Gate"]
    },
    {
        title: "Berlin, Germany",
        tooltip: "Brandenburg Gate",
        thumbnailLink: "https://images.unsplash.com/photo-1587330979470-3595ac045ab0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJlcmxpbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        tags: ["Germany", "History", "Brandenburg Gate"]
    },
    {
        title: "Tokyo, Japan",
        tooltip: "Tokyo Tower",
        thumbnailLink: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dG9reW98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        tags: ["Japan", "Culture"]
    },
    {
        title: "San Francisco, California",
        tooltip: "Golden Gate Bridge",
        thumbnailLink: "https://images.unsplash.com/photo-1541464522988-31b420f688b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNhbiUyMGZyYW5jaXNjb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        tags: ["USA", "Sea", "Surfing"]
    },
    {
        title: "Grand Canyon, Arizona",
        tooltip: "Grand Canyon",
        thumbnailLink: "https://images.unsplash.com/photo-1615551043360-33de8b5f410c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhbmQlMjBjYW55b258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        tags: ["USA", "Mountains", "Hot"]
    },
];


const Index: NextPage = () => {
    return (
        <>

            <Head>
                <title>Travel2Go</title>
            </Head>

            <Navbar />

            <Content>

                <CardPanel>

                    { locations.map(props => <LocationCard {...props} />) }

                </CardPanel>

            </Content>

        </>
    );
}

// noinspection JSUnusedGlobalSymbols
export default Index;
