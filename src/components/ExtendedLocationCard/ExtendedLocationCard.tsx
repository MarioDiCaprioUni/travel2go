import React from "react";
import {LocationCardProps} from "@/components/LocationCard/LocationCard";
import {
    Dialog,
    DialogContent,
    DialogTitle,
    IconButton, Paper,
    TableBody, TableCell,
    TableContainer, TableHead, TableRow,
    useMediaQuery,
    useTheme
} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import {Image, ImageWrapper, StyledTable, Title, TitleWrapper} from "./ExtendedLocationCard.styles";
import {IoClose as CloseIcon} from "react-icons/io5";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import {convertCurrency, Currency, getCurrencySymbol} from "@/utils/metrics";


interface ExtendedLocationCardProps extends LocationCardProps {
    open: boolean;
    onClose?: () => void;
}


const ExtendedLocationCard: React.FC<ExtendedLocationCardProps> = (props) => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const { currency } = useSelector((state: RootState) => state.metrics);

    const currencySymbol = getCurrencySymbol(currency);
    const costsPerDay = Math.round(convertCurrency(props.dailyEuros, Currency.EURO, currency));

    return (
        <Dialog
            open={props.open}
            onClose={props.onClose}
            maxWidth="md"
            fullScreen={isSmallScreen}
            fullWidth
            scroll="body"
        >

            {/* Title with exit button */}
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

            {/* Content */}
            <DialogContent sx={{ padding: isSmallScreen? 0 : 3 }}>

                {/* Carousel with images */}
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

                {/* Costs */}
                <Title>Costs</Title>
                <TableContainer component={Paper}>
                    <StyledTable>
                        <TableHead>

                            <TableRow>
                                <TableCell>
                                    Timespan
                                </TableCell>
                                <TableCell>
                                    Per Person
                                </TableCell>
                                <TableCell>
                                    Per Couple
                                </TableCell>
                            </TableRow>

                        </TableHead>
                        <TableBody>

                            <TableRow>
                                <TableCell>
                                    Costs per day
                                </TableCell>
                                <TableCell>
                                    { costsPerDay + ' ' + currencySymbol }
                                </TableCell>
                                <TableCell>
                                    { (costsPerDay * 2) + ' ' + currencySymbol }
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell>
                                    Costs (1 week)
                                </TableCell>
                                <TableCell>
                                    { (costsPerDay * 7) + ' ' + currencySymbol }
                                </TableCell>
                                <TableCell>
                                    { (costsPerDay * 14) + ' ' + currencySymbol }
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell>
                                    Costs (2 weeks)
                                </TableCell>
                                <TableCell>
                                    { (costsPerDay * 14) + ' ' + currencySymbol }
                                </TableCell>
                                <TableCell>
                                    { (costsPerDay * 28) + ' ' + currencySymbol }
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell>
                                    Costs (one month)
                                </TableCell>
                                <TableCell>
                                    { (costsPerDay * 32) + ' ' + currencySymbol }
                                </TableCell>
                                <TableCell>
                                    { (costsPerDay * 64) + ' ' + currencySymbol }
                                </TableCell>
                            </TableRow>
                        </TableBody>

                        <caption>
                            Data from {' '}
                            <a href="https://www.budgetyourtrip.com" target="_blank" rel="noreferrer">
                                BudgetYourTrip.com
                            </a>
                        </caption>

                    </StyledTable>
                </TableContainer>

            </DialogContent>

        </Dialog>
    );
}


export default ExtendedLocationCard;
