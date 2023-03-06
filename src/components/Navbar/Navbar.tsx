import React, {useEffect, useState} from "react";
import {Context, Logo} from "./Navbar.styles";
import {IconButton, Toolbar} from "@mui/material";
import {MdMenu as MenuIcon} from "react-icons/md";
import Sidebar from "@/components/Sidebar/Sidebar";
import {useScroll} from "framer-motion";


const Navbar: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
    const [isElevated, setIsElevated] = useState<boolean>(false);
    const { scrollY } = useScroll();

    useEffect(() => {
        scrollY.on('change', val => {
            setIsElevated(val >= 60);
        });
    }, []);

    function toggleSidebar() {
        setIsSidebarOpen(!isSidebarOpen);
    }

    return (
        <Context
            position="sticky"
            sx={
                isElevated?
                    {
                        boxShadow: theme => `0 0 15px ${theme.palette.text.disabled}`
                    }
                    : undefined
            }>
            <Toolbar>

                <Logo>
                    <img src="/logo.png" alt="TRAVEL2GO" style={{ width: "300px" }} />
                </Logo>

                <IconButton onClick={toggleSidebar}>
                    <MenuIcon />
                </IconButton>

            </Toolbar>

            <Sidebar open={isSidebarOpen} onClose={toggleSidebar} />
        </Context>
    );
}

export default Navbar;
