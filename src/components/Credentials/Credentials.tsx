import React from "react";
import {Context, Developer, Link} from "./Credentials.styles";


const Credentials: React.FC = () => {
    return (
        <Context>
            <Developer>
                Designed & Developed by {' '}
                <Link href="https://mariodicaprio.vercel.app" target="_blank" rel="noreferrer">
                    Mario Di Caprio
                </Link>
            </Developer>
        </Context>
    );
}


export default Credentials;
