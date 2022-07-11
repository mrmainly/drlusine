import React from "react";

import { Box, Rating } from "@mui/material";
import { styled } from "@mui/system";

import { Text } from "..";

const StarsBox = styled(Box)(({ theme }) => ({
    borderRadius: 8,
    padding: 20,
    backgroundColor: "#FFF1D8",
    height: 153,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
        height: 130,
    },
}));

const Img = styled("img")(({ theme }) => ({
    width: 260,
    [theme.breakpoints.down("md")]: {
        width: 160,
    },
}));

const ImgTwo = styled("img")(({ theme }) => ({
    width: 300,
    marginTop: "-20px",
    [theme.breakpoints.down("md")]: {
        width: 173,
    },
    [theme.breakpoints.down("sm")]: {
        marginTop: 0,
        width: 130,
    },
}));

const BenefitsCard = ({ text, img }) => {
    const RootImg = styled(Box)(({ theme }) => ({
        borderRadius: 8,
        paddingTop: 20,
        paddingLeft: img === "/img/face.png" ? 0 : 20,
        paddingRight: img === "/img/face.png" ? 20 : 0,
        backgroundColor: "#FFF1D8",
        height: 382,
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        alignItems: img === "/img/face.png" ? "start" : "end",
        [theme.breakpoints.down("md")]: {
            display: "flex",
            flexDirection: "row",
            height: 150,
            alignItems: "start",
            paddingRight: 0,
            paddingLeft: 20,
        },
    }));

    const TextBox = styled(Box)(({ theme }) => ({
        paddingRight: img === "/img/face.png" ? 0 : 20,
        paddingLeft: img === "/img/face.png" ? 20 : 0,
        [theme.breakpoints.down("md")]: {
            paddingLeft: 0,
            paddingRight: 0,
        },
    }));

    const ImgVersion = () => {
        return (
            <RootImg>
                <TextBox>
                    <Text
                        sx={{
                            fontWeight: 600,
                            fontFamily: "Manrope",
                            fontSize: 16,
                        }}
                        sm={13}
                    >
                        {text}
                    </Text>
                </TextBox>
                {img === "/img/face.png" ? (
                    <Img src={img} />
                ) : (
                    <ImgTwo src={img} />
                )}
            </RootImg>
        );
    };

    const StarsVersion = () => {
        return (
            <StarsBox>
                <Text
                    sx={{
                        fontWeight: 600,
                        fontFamily: "Manrope",
                        fontSize: 16,
                    }}
                    sm={13}
                >
                    {text}
                </Text>
                <img src="/img/image14.png" style={{ width: "80%" }} />
            </StarsBox>
        );
    };

    return <>{img ? <ImgVersion /> : <StarsVersion />}</>;
};

export default BenefitsCard;
