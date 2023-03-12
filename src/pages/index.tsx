import {NextPage} from "next";
import Navbar from "@/components/Navbar/Navbar";
import {CardPanel, Content} from "@/styles/Index.styles";
import LocationCard from "@/components/LocationCard/LocationCard";
import Head from "next/head";
import Credentials from "@/components/Credentials/Credentials";
import {motion, Variants} from "framer-motion";
import {LOCATIONS} from "@/components/LocationCard/locations";


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

                    {LOCATIONS.map(props =>
                        <motion.div
                            key={props.place}
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
