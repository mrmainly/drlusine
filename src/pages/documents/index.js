import React from "react";

import { Box } from "@mui/material";
import { styled } from "@mui/system";

import { Text, Container, DocumentSlider } from "../../components";

const Root = styled(Container)(({ theme }) => ({
    marginTop: "-140px",
}));

const Documents = () => {
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
                Наши документы <br /> удостоверяющие специалиста
            </Text>
            <DocumentSlider />
        </Root>
    );
};

export default Documents;
