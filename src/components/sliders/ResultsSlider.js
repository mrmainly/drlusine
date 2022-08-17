import React from "react";

import { Box, MenuItem } from "@mui/material";
import { styled } from "@mui/system";
import Slider from "react-slick";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { Container } from "..";

const ArrowNextItem = styled(Box)(({ theme }) => ({
    height: 52,
    width: 52,
    position: "absolute",
    top: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    right: "-35px",
    background:
        "linear-gradient(90deg, #FFE0AA -25.96%, rgba(255, 201, 105, 0) 119.23%)",
    cursor: "pointer",
    borderRadius: "50%",
    [theme.breakpoints.down("md")]: {
        right: 0,
        top: "45%",
    },
    [theme.breakpoints.down("sm")]: {
        top: "40%",
        right: "-10px",
    },
}));

const ArrowPrevItem = styled(Box)(({ theme }) => ({
    height: 52,
    width: 52,
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    top: "50%",
    zIndex: 900,
    left: "-35px",
    cursor: "pointer",
    background:
        "linear-gradient(90deg, #FFE0AA -25.96%, rgba(255, 201, 105, 0) 119.23%)",
    borderRadius: "50%",
    [theme.breakpoints.down("md")]: {
        left: 0,
        top: "45%",
    },
    [theme.breakpoints.down("sm")]: {
        top: "40%",
        left: "-10px",
    },
}));

const BackgroundResult = styled(Box)(({ theme }) => ({
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100%",
    height: 800,
    [theme.breakpoints.down("sm")]: {
        height: 300,
    },
}));

const Root = styled(Container)(({ theme }) => ({
    marginTop: 78,
    [theme.breakpoints.down("sm")]: {
        marginTop: 47,
    },
}));

const ArrowNext = (props) => {
    const { className, style, onClick } = props;
    return (
        <ArrowNextItem className="slick-arrow" onClick={onClick}>
            <ArrowForwardIcon fontSize={"large"} htmlColor={"white"} />
        </ArrowNextItem>
    );
};

const ArrowPrev = (props) => {
    const { className, style, onClick } = props;
    return (
        <ArrowPrevItem className="slick-arrow" onClick={onClick}>
            <ArrowBackIcon fontSize={"large"} htmlColor={"white"} />
        </ArrowPrevItem>
    );
};

const ResultsSlider = ({ data, height, heightSm }) => {
    const Img = styled("img")(({ theme }) => ({
        width: "80%",
        margin: "0 auto",
        height: height ? height : "auto",
        objectFit: "cover",
        [theme.breakpoints.down("sm")]: {
            width: "90%",
            height: heightSm ? heightSm : "auto",
        },
    }));

    const settings = {
        dots: false,
        centerPadding: "0px",
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: 1,
        nextArrow: <ArrowNext />,
        prevArrow: <ArrowPrev />,
    };

    const resultsData = [
        "image160",
        "image162",
        "image163",
        "image164",
        "image165",
        "image167",
        "image168",
        "image170",
        "image171",
        "image172",
        "image185",
    ];

    return (
        <Root>
            <Slider {...settings}>
                {data
                    ? data.map((item, index) => (
                          <BackgroundResult
                              key={index}
                              sx={{ backgroundImage: `url(/img/${item}.png)` }}
                          />
                      ))
                    : resultsData.map((item, index) => (
                          <BackgroundResult
                              key={index}
                              sx={{ backgroundImage: `url(/img/${item}.png)` }}
                          />
                      ))}
            </Slider>
        </Root>
    );
};

export default ResultsSlider;
