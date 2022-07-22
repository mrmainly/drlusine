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
    overflow: "hidden",
}));

const Img = styled("img")(({ theme }) => ({
    [theme.breakpoints.up("xl")]: {
        width: 550,
    },
    [theme.breakpoints.down("xl")]: {
        width: 550,
    },
    [theme.breakpoints.down("lg")]: {
        width: "100%",
    },
    [theme.breakpoints.down("md")]: {
        width: 400,
        marginLeft: 80,
    },
    [theme.breakpoints.down("sm")]: {
        width: 350,
        marginLeft: 60,
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

const GridImg = styled(Grid)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
        display: "flex",
        justifyContent: "center",
    },
}));

const GridMain = styled(Grid)(({ theme }) => ({
    marginBottom: "-4px",
    [theme.breakpoints.down("md")]: {
        marginBottom: 0,
        display: "flex",
        jusitfyContent: "center",
    },
}));

const StartScreen = () => {
    return (
        <>
            <Root wrapper={true} minHeight={475}>
                <GridMain container>
                    <GridText item xl={7} lg={6} md={6} sm={7}>
                        <Box sx={{ mt: 14 }}>
                            <Text sx={{ fontSize: 60 }} lg={50}>
                                Косметология
                            </Text>
                            <Text sx={{ fontSize: 16 }} lg={12}>
                                Косметология - эта наука и современная область
                                медицины на стыке двух наук: дерматологии (науки
                                о коже) и физиотерапии (науке о воздействии
                                природных и иных факторов на человеческий
                                организм). В современном мире медицинская
                                косметология подразумевает глубокое изучение
                                проблемы и поиск методов её решения. Для этого
                                используются разнообразные активные вещества и
                                специализированное оборудование и, конечно же,
                                опыт и знания самого специалиста! Весь спектр
                                услуг по уходу за кожей лица и тела сейчас
                                доступны практически каждой женщине.
                            </Text>
                        </Box>
                    </GridText>
                    <GridImg item xl={5} lg={6} md={6} sm={12} xs={12}>
                        <Img src="/img/kosmetologia-PhotoRoom.png" />
                    </GridImg>
                </GridMain>
            </Root>
            <BoxMobile>
                <Text sx={{ fontSize: 28 }}>Косметология</Text>
                <Text sx={{ fontSize: 24, mt: 1 }}>
                    Косметология - эта наука и современная область медицины на
                    стыке двух наук: дерматологии (науки о коже) и физиотерапии
                    (науке о воздействии природных и иных факторов на
                    человеческий организм). В современном мире медицинская
                    косметология подразумевает глубокое изучение проблемы и
                    поиск методов её решения. Для этого используются
                    разнообразные активные вещества и специализированное
                    оборудование и, конечно же, опыт и знания самого
                    специалиста! Весь спектр услуг по уходу за кожей лица и тела
                    сейчас доступны практически каждой женщине.
                </Text>
            </BoxMobile>
        </>
    );
};

export default StartScreen;
