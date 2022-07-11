import React from "react";

import { Box } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

import { Text, Container } from "../../../components";
import ROUTES from "../../../routes";

const Main = styled(Container)(({ theme }) => ({
    marginTop: 131,
    paddingTop: 89,
    background: "white",
    [theme.breakpoints.down("lg")]: {
        display: "flex",
        justifyContent: "center",
    },
    [theme.breakpoints.down("sm")]: {
        paddingTop: 40,
        paddingBottom: 40,
        marginTop: 100,
    },
}));

const Root = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("lg")]: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
}));

const TextBox = styled(Box)(({ theme }) => ({
    width: 500,
    marginTop: 70,
    [theme.breakpoints.down("lg")]: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
    },
    [theme.breakpoints.down("sm")]: {
        width: "100%",
        marginTop: 40,
    },
}));

const ResultsScreen = () => {
    const navigate = useNavigate();

    return (
        <Main wrapper={true} minHeight={500} sm={270}>
            <Root>
                <Text sx={{ fontSize: 64, textAlign: "center" }} sm={30}>
                    Результаты
                </Text>
                <TextBox>
                    <Text
                        sx={{
                            fontSize: 24,
                            fontFamily: "Manrope",
                        }}
                        sm={18}
                    >
                        Мы публикуем только реальные фотографии с нашими
                        пациентами. Мы дорожим репутацией, заслуженной годами
                        безупречной работы.
                    </Text>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            mt: 4,
                            cursor: "pointer",
                        }}
                        onClick={() => navigate(ROUTES.Results)}
                    >
                        <img src="/img/Vector11.png" />
                        <Text
                            sx={{
                                color: "#FFBE49",
                                fontSize: 24,
                                fontFamily: "Manrope",

                                ml: 2,
                            }}
                        >
                            Фото до и после
                        </Text>
                    </Box>
                </TextBox>
            </Root>
        </Main>
    );
};

export default ResultsScreen;
