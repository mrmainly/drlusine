import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/system";

import { Container, Text, ReviewSlider } from "../../../components";

const Main = styled(Container)(({ theme }) => ({
    paddingTop: 30,
    background: "#F6F6F6",
}));

const SixScreen = () => {
    return (
        <Main wrapper={true}>
            <Text
                sx={{ fontSize: 48, color: "#3E3E3E", textAlign: "center" }}
                md={30}
                sm={24}
            >
                Посмотрите, что
                <br /> говорят наши клиенты
            </Text>
            <ReviewSlider />
        </Main>
    );
};

export default SixScreen;
