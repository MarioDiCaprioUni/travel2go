import React from "react";
import {Context, Links, Logo} from "@/components/Navbar/Navbar.styles";


const Navbar: React.FC = () => {
    return (
        <Context>

            <Logo>
                <img src="/logo.png" alt="TRAVEL2GO" style={{ width: "300px" }} />
            </Logo>

            <Links>

            </Links>

        </Context>
    );
}

export default Navbar;
