import React from "react";

import { Box } from "@mui/material";
import { styled } from "@mui/system";

import { Text, Container, ResultsSlider } from "../../components";

const Root = styled(Container)(({ theme }) => ({
    marginTop: "-140px",
}));

const Results = () => {
    return (
        <Root>
            <Text
                sx={{
                    fontSize: 40,
                    fontFamily: "Lora",
                    color: "#3E3E3E",
                    textAlign: "center",
                    fontWeight: 400,
                    fontStyle: "normal",
                }}
                sm={24}
            >
                Фото до и после
            </Text>
            <ResultsSlider />
        </Root>
    );
};

export default Results;
