import {NextPage} from "next";
import Navbar from "@/components/Navbar/Navbar";
import {CardPanel, Content} from "@/styles/Index.styles";
import LocationCard from "@/components/LocationCard/LocationCard";


const Index: NextPage = () => {
    return (
        <>

            <Navbar />

            <Content>

                <CardPanel>

                    <LocationCard
                        thumbnailLink="https://www.paesana.com/hubfs/Blog/Sicily%20Italy%20landscape%20with%20water%20and%20homes%20in%20background.jpg"
                        title="Sicily, Italy"
                        tooltip="Sicily"
                        tags={["Italy", "European", "Food", "Hot", "Sea"]}
                    />

                </CardPanel>

            </Content>

        </>
    );
}

// noinspection JSUnusedGlobalSymbols
export default Index;
