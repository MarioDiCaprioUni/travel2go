import {NextPage} from "next";
import Navbar from "@/components/Navbar/Navbar";
import {CardPanel, Content} from "@/styles/Index.styles";
import LocationCard, {LocationCardProps} from "@/components/LocationCard/LocationCard";
import Head from "next/head";
import Credentials from "@/components/Credentials/Credentials";
import {motion, Variants} from "framer-motion";


const locations: Array<LocationCardProps> = [
    {
        title: "Sicily, Italy",
        tooltip: "Sicily",
        thumbnailLink: "https://images.unsplash.com/photo-1524942434100-2b3f200f5b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        dailyEuros: 89,
        coords: {
            lat: 37.6000,
            lon: 14.0154
        }
    },
    {
        title: "Rome, Italy",
        tooltip: "The Colosseum",
        thumbnailLink: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cm9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        dailyEuros: 3,
        coords: {
            lat: 41.9028,
            lon: 12.4964
        }
    },
    {
        title: "Chicago, Illinois",
        tooltip: "The Cloud Gate",
        thumbnailLink: "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2hpY2Fnb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        dailyEuros: 4,
        coords: {
            lat: 41.8781,
            lon: 87.6298
        }
    },
    {
        title: "Berlin, Germany",
        tooltip: "Brandenburg Gate",
        thumbnailLink: "https://images.unsplash.com/photo-1587330979470-3595ac045ab0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJlcmxpbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        dailyEuros: 3,
        coords: {
            lat: 52.5200,
            lon: 13.4050
        }
    },
    {
        title: "Tokyo, Japan",
        tooltip: "Tokyo Tower",
        thumbnailLink: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dG9reW98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        dailyEuros: 3,
        coords: {
            lat: 35.6762,
            lon: 139.6503
        }
    },
    {
        title: "San Francisco, California",
        tooltip: "Golden Gate Bridge",
        thumbnailLink: "https://images.unsplash.com/photo-1541464522988-31b420f688b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNhbiUyMGZyYW5jaXNjb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        dailyEuros: 4,
        coords: {
            lat: 37.7749,
            lon: 122.4194
        }
    },
    {
        title: "Grand Canyon, Arizona",
        tooltip: "Grand Canyon",
        thumbnailLink: "https://images.unsplash.com/photo-1615551043360-33de8b5f410c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhbmQlMjBjYW55b258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        dailyEuros: 2,
        coords: {
            lat: 36.0544,
            lon: 112.1401
        }
    },
];


const cardVariants: Variants = {
    before: {
        opacity: 0,
        translateY: -50
    },
    after: {
        opacity: 1,
        translateY: 0
    }
}


const Index: NextPage = () => {
    return (
        <>

            <Head>
                <title>Travel2Go</title>
            </Head>

            <Navbar />

            <Content>

                <CardPanel
                    initial="before"
                    animate="after"
                    transition={{ staggerChildren: 0.3 }}
                >

                    {locations.map(props =>
                        <motion.div
                            key={props.title}
                            variants={cardVariants}
                            transition={{ duration: 0.5 }}
                        >
                            <LocationCard {...props} />
                        </motion.div>
                    )}

                </CardPanel>

            </Content>

            <Credentials />

        </>
    );
}

// noinspection JSUnusedGlobalSymbols
export default Index;
