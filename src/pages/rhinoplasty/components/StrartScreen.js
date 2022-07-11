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
    width: "100%",
    [theme.breakpoints.down("xl")]: {
        width: 500,
    },
    [theme.breakpoints.down("lg")]: {
        width: 450,
    },
    [theme.breakpoints.down("sm")]: {
        width: 320,
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
                    <GridText item xl={6} lg={7} md={6} sm={7} xs={12}>
                        <Box sx={{ mt: 14 }}>
                            <Text sx={{ fontSize: 60 }} lg={50}>
                                Ринопластика
                            </Text>
                            <Text sx={{ fontSize: 32 }} lg={25}>
                                Эстетическая коррекция носа, которая не имеет
                                медицинских показаний
                            </Text>
                        </Box>
                    </GridText>
                    <Grid
                        item
                        xl={6}
                        lg={5}
                        md={6}
                        sm={12}
                        xs={12}
                        sx={{ display: "flex", justifyContent: "center" }}
                    >
                        <Img src="/img/Room1.png" />
                    </Grid>
                </Grid>
            </Root>
            <BoxMobile>
                <Text sx={{ fontSize: 28 }}>Ринопластика</Text>
                <Text sx={{ fontSize: 24, mt: 1 }}>
                    Эстетическая коррекция носа, которая не имеет медицинских
                    показаний
                </Text>
            </BoxMobile>
        </>
    );
};

export default StartScreen;
