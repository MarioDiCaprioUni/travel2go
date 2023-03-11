import React from "react";
import {LocationCardProps} from "@/components/LocationCard/LocationCard";
import {Dialog, DialogContent, DialogTitle, IconButton, useMediaQuery, useTheme} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import {Image, ImageWrapper, TitleWrapper} from "@/components/ExtendedLocationCard/ExtendedLocationCard.styles";
import {IoClose as CloseIcon} from "react-icons/io5";


interface ExtendedLocationCardProps extends LocationCardProps {
    open: boolean;
    onClose?: () => void;
}


const ExtendedLocationCard: React.FC<ExtendedLocationCardProps> = (props) => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Dialog
            open={props.open}
            onClose={props.onClose}
            maxWidth="md"
            fullScreen={isSmallScreen}
            fullWidth
            scroll="body"
        >

            <DialogTitle>
                <TitleWrapper>
                    <span>
                        { props.title }
                    </span>
                    <IconButton onClick={props.onClose}>
                        <CloseIcon />
                    </IconButton>
                </TitleWrapper>
            </DialogTitle>

            <DialogContent sx={{ padding: isSmallScreen? 0 : 3 }}>
                <Carousel
                    navButtonsAlwaysVisible
                    navButtonsProps={{ style: { background: "rgba(0,0,0,0.6)" } }}
                >
                    {
                        props.imageLinks.map((link, index) =>
                            <ImageWrapper key={index}>
                                <Image src={link} alt="" />
                            </ImageWrapper>
                        )
                    }
                </Carousel>
            </DialogContent>

        </Dialog>
    );
}


export default ExtendedLocationCard;
