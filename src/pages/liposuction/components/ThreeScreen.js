import React from "react";
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/system";

import { Container, Text } from "../../../components";

const Root = styled(Container)(({ theme }) => ({
    marginTop: 110,
    [theme.breakpoints.down("sm")]: {
        marginTop: 60,
    },
}));

const Main = styled(Box)(({ theme }) => ({
    marginTop: 28,
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
        width: "100%",
        margin: "0 auto",
    },
}));

const Title = styled(Text)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
        textAlign: "center",
    },
}));

const Img = styled("img")(({ theme }) => ({
    height: 465,
    [theme.breakpoints.down("lg")]: {
        width: "100%",
        objectFit: "cover",
        height: "auto",
    },
    [theme.breakpoints.down("md")]: {
        width: "60%",
    },
}));

const MainGrid = styled(Grid)(({ theme }) => ({
    marginTop: 80,
    [theme.breakpoints.down("sm")]: {
        marginTop: 0,
    },
}));

const GridImg = styled(Grid)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
        display: "none",
    },
    [theme.breakpoints.down("sm")]: {
        display: "flex",
        marginTop: 0,
    },
}));

const ThreeScreen = () => {
    const data = [
        {
            label: "Верхняя",
            value: "375 тыс. руб",
        },
        {
            label: "Нижняя",
            value: "420 тыс. руб",
        },
        {
            label: "Круговая",
            value: "450 тыс. руб",
        },
        {
            label: "Блефаропластика азиатских глаз",
        },
        {
            label: "Верхняя",
            value: "450 тыс. руб",
        },
        {
            label: "Нижняя",
            value: "450 тыс. руб",
        },
    ];

    return (
        <Root>
            <Text sx={{ fontSize: 40, textAlign: "center" }} sm={24}>
                Услуги и цены
            </Text>
            <MainGrid container spacing={4}>
                <Grid
                    item
                    xl={4}
                    lg={4}
                    md={4}
                    sm={12}
                    xs={12}
                    sx={{ display: "flex", justifyContent: "center" }}
                >
                    <Img src={"/img/Rectangle234234.png"} />
                </Grid>
                <Grid item xl={8} lg={8} md={8} sm={12} xs={12}>
                    <Title sx={{ fontSize: 40 }} sm={24}>
                        Моделирование тела
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
