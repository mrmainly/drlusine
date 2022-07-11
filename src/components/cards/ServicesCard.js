import React from "react";

import { Box, Button } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

import { Text } from "..";

const Root = styled(Box)(({ theme }) => ({
    marginTop: 60,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: 440,
    width: 438,
    paddingTop: 40,
    position: "relative",
    marginLeft: 10,
    marginRight: 10,
    [theme.breakpoints.down("sm")]: {
        width: 280,
        height: 280,
        paddingTop: 20,
    },
}));

const Btn = styled(Button)(({ theme }) => ({
    backgroundColor: "white",
    boxShadow: "0px 4px 26px rgba(0, 0, 0, 0.25)",
    color: "#3E3E3E",
    width: 255,
    height: 75,
    fontSize: 20,
    position: "absolute",
    top: 478,
    left: "50%",
    transform: "translate(-50%, -50%)",
    [theme.breakpoints.down("sm")]: {
        top: 300,
        width: 141,
        height: 44,
        fontSize: 12,
    },
    "&:hover": {
        color: "grey",
        backgroundColor: "#e6e9ed",
    },
}));

const ServicesCard = ({ text, bgimg, title, link, type }) => {
    const navigate = useNavigate();

    return (
        <Root style={{ backgroundImage: `url(/img/${bgimg}` }}>
            <Text
                sx={{
                    fontSize: 24,
                    fontFamily: "Manrope",
                    textAlign: "center",
                    fontWeight: 600,
                    pl: type === "right" ? 10 : 0,
                }}
                sm={14}
            >
                {title}
            </Text>
            <Box
                sx={{
                    pl: type === "right" ? 16 : type === "left" ? 5 : 6.3,
                    pr: type === "left" ? 16 : type === "right" ? 5 : 6.3,
                    pt: 2,
                }}
            >
                <Text
                    sx={{
                        fontFamily: "Manrope",
                        fontWeight: 600,
                        fontSize: 16,
                    }}
                    sm={9}
                >
                    {text}
                </Text>
            </Box>
            <Btn
                variant="contained"
                color="success"
                onClick={() => navigate(link)}
            >
                Подробнее
            </Btn>
        </Root>
    );
};

export default ServicesCard;
