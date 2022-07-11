import React from "react";
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/system";

import { Container, Text } from "../../../components";

const Root = styled(Container)(({ theme }) => ({
    backgroundColor: "#FFF1CC",
    marginTop: "-350px",
    zIndex: 0,
    display: "flex",
    alignItems: "end",
    [theme.breakpoints.down("sm")]: {
        marginTop: "-410px",
    },
}));

const Img = styled("img")(({ theme }) => ({
    [theme.breakpoints.down("xl")]: {
        width: "100%",
    },
    [theme.breakpoints.down("md")]: {
        width: 250,
    },
}));

const GridText = styled(Grid)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
        display: "none",
    },
}));

const BoxMobile = styled(Container)(({ theme }) => ({
    display: "none",
    [theme.breakpoints.down("md")]: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        marginTop: 30,
    },
}));

const StartScreen = () => {
    return (
        <>
            <Root wrapper={true} minHeight={475}>
                <Grid container>
                    <GridText item xl={7} lg={7} md={7} sm={7}>
                        <Box sx={{ mt: 14 }}>
                            <Text sx={{ fontSize: 60 }} lg={50}>
                                Моделирование тела
                            </Text>
                            <Text sx={{ fontSize: 32 }} lg={25}>
                                Устранение эстетических дефектов фигуры и
                                замедление физиологического старения кожи
                            </Text>
                        </Box>
                    </GridText>
                    <Grid
                        item
                        xl={5}
                        lg={5}
                        md={5}
                        sm={12}
                        xs={12}
                        sx={{ display: "flex", justifyContent: "center" }}
                    >
                        <Img src="/img/123455.png" />
                    </Grid>
                </Grid>
            </Root>
            <BoxMobile>
                <Text sx={{ fontSize: 28 }}> Моделирование тела</Text>
                <Text sx={{ fontSize: 24, mt: 1 }}>
                    Устранение эстетических дефектов фигуры и замедление
                    физиологического старения кожи
                </Text>
            </BoxMobile>
        </>
    );
};

export default StartScreen;
