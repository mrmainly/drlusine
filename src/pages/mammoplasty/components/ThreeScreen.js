import React from "react";
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/system";

import { Container, Text, Button } from "..";

const Root = styled(Container)(({ theme }) => ({
    marginTop: 110,
    [theme.breakpoints.down("md")]: {
        marginTop: 60,
    },
    [theme.breakpoints.down("md")]: {
        marginTop: 40,
    },
}));

const Main = styled(Box)(({ theme }) => ({
    marginTop: 28,
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
        width: "70%",
        margin: "0 auto",
    },
}));

const Title = styled(Text)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
        textAlign: "center",
        marginTop: 55,
    },
}));

const Img = styled("img")(({ theme }) => ({
    height: 465,
    [theme.breakpoints.down("lg")]: {
        height: 255,
        objectFit: "cover",
        height: "auto",
    },

    [theme.breakpoints.down("sm")]: {
        width: 215,
    },
}));

const MainGrid = styled(Grid)(({ theme }) => ({
    marginTop: 80,
    [theme.breakpoints.down("sm")]: {
        marginTop: 45,
    },
}));

const MyButton = styled(Button)(({ theme }) => ({
    position: "absolute",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 244,
    height: 60,
    top: 460,
    [theme.breakpoints.down("sm")]: {
        width: 185,
        height: 46,
        top: 330,
    },
}));

const ThreeScreen = ({ data, title, img }) => {
    return (
        <Root>
            <Text sx={{ fontSize: 40, textAlign: "center" }} sm={24}>
                Услуги и цены
            </Text>
            <MainGrid container>
                <Grid
                    item
                    xl={4}
                    lg={5}
                    md={5}
                    sm={12}
                    xs={12}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        position: "relative",
                    }}
                >
                    <Img src={img} />
                    <MyButton>
                        <Text
                            sx={{ fontSize: 20, fontFamily: "Manrope" }}
                            sm={14}
                        >
                            записаться
                        </Text>
                    </MyButton>
                </Grid>
                <Grid item xl={8} lg={7} md={7} sm={12} xs={12}>
                    <Title sx={{ fontSize: 40 }} sm={24}>
                        {title}
                    </Title>
                    <Main>
                        {data.map((item, index) => (
                            <Box
                                key={index}
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    mt: 4,
                                }}
                            >
                                <Text sx={{ fontSize: 24 }} sm={12}>
                                    {item.label}
                                </Text>
                                <Text sx={{ fontSize: 24 }} sm={12}>
                                    {item.value}
                                </Text>
                            </Box>
                        ))}
                    </Main>
                </Grid>
            </MainGrid>
        </Root>
    );
};

export default ThreeScreen;
