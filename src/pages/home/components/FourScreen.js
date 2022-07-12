import React from "react";
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/system";

import { Container, Text } from "../../../components";

const Main = styled(Container)(({ theme }) => ({
    paddingTop: 150,
    background: "white",
    marginTop: 139,
    [theme.breakpoints.down("md")]: {
        paddingTop: 100,
        marginTop: 100,
    },
    [theme.breakpoints.down("sm")]: {
        paddingTop: 60,
    },
}));

const MyText = styled(Text)(({ theme }) => ({
    marginLeft: 19,
    fontSize: 20,
    fontFamily: "Manrope",
}));

const Down = styled(Box)(({ theme }) => ({
    backgroundImage: "url(/img/11212122212.png)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: 300,
    width: "100%",
    zIndex: 1,
    position: "relative",
    marginTop: "-200px",
    [theme.breakpoints.down("xl")]: {
        marginTop: "-130px",
    },
    [theme.breakpoints.down("lg")]: {
        marginTop: "-140px",
    },
    [theme.breakpoints.down("sm")]: {
        marginTop: "-60px",
        height: 100,
    },
}));

const Img = styled("img")(({ theme }) => ({
    width: "80%",
    [theme.breakpoints.down("lg")]: {
        width: "90%",
    },
    [theme.breakpoints.down("md")]: {
        width: 350,
        marginRight: 50,
    },
    [theme.breakpoints.down("sm")]: {
        width: 250,
        marginRight: 50,
    },
}));

const MainGrid = styled(Grid)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
        display: "flex",
        flexDirection: "column-reverse",
    },
}));

const Title = styled(Text)(({ theme }) => ({
    fontSize: 70,
    [theme.breakpoints.down("md")]: {
        textAlign: "center",
    },
}));

const UnderTitle = styled(Text)(({ theme }) => ({
    fontSize: 28,
    marginTop: 49,
    [theme.breakpoints.down("md")]: {
        textAlign: "center",
    },
}));

const TextBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "start",
    marginTop: 70,
    [theme.breakpoints.down("md")]: {
        marginLeft: 25,
        marginRight: 25,
    },
    [theme.breakpoints.down("sm")]: {
        marginLeft: 10,
        marginRight: 10,
    },
}));

const GridImg = styled(Grid)(({ theme }) => ({
    display: "flex",
    alignItems: "end",
    [theme.breakpoints.down("md")]: {
        justifyContent: "center",
    },
}));

const GridText = styled(Grid)(({ theme }) => ({
    paddingBottom: 150,
    [theme.breakpoints.down("lg")]: {
        paddingBottom: 120,
    },
    [theme.breakpoints.down("md")]: {
        paddingBottom: 100,
    },

    [theme.breakpoints.down("sm")]: {
        paddingBottom: 50,
    },
}));

const Icon = styled("img")(({ theme }) => ({
    [theme.breakpoints.down("sm")]: {
        width: 30,
        height: 30,
    },
}));

const FourScreen = () => {
    return (
        <>
            <Main wrapper={true}>
                <MainGrid container>
                    <GridImg item xl={6} lg={6} md={6}>
                        <Img src="/img/IMG_2105.png" />
                    </GridImg>
                    <GridText item xl={6} lg={6} md={6}>
                        <Title md={40}>Лусине Майтесян</Title>
                        <UnderTitle md={24}>
                            ЛИЦО ВСЕГДА ЯВЛЯЕТСЯ "ВИЗИТНОЙ КАРТОЧКОЙ"
                        </UnderTitle>
                        <Box>
                            <TextBox>
                                <Icon src="/img/stars.png" />
                                <MyText md={18} sm={16}>
                                    Преподаватель международного уровня по
                                    пластической хирургии и косметологии
                                </MyText>
                            </TextBox>
                            <TextBox>
                                <Icon src="/img/stars.png" />
                                <MyText md={18} sm={16}>
                                    Врач-дерматовенеролог косметолог
                                </MyText>
                            </TextBox>
                            <TextBox>
                                <Icon src="/img/stars.png" />
                                <MyText md={18} sm={16}>
                                    Имеет членство АSLMSG
                                </MyText>
                            </TextBox>
                            <TextBox>
                                <Icon src="/img/stars.png" />
                                <MyText md={18} sm={16}>
                                    Долгий путь обучения, который не
                                    прекращается и по сей день,а также
                                    ежедневная практика-это залог моего успеха!
                                </MyText>
                            </TextBox>
                        </Box>
                    </GridText>
                </MainGrid>
            </Main>
            <Down />
        </>
    );
};

export default FourScreen;
