import React from "react";

import { Box, Grid, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

import ROUTES from "../../routes";
import { Container, Text } from "..";

const Cuslink = styled(Link)(({ theme }) => ({
    color: "black",
    textDecoration: "none",
}));

const BoxLogo = styled(Box)(({ theme }) => ({
    color: "black",
    cursor: "pointer",
    [theme.breakpoints.down("lg")]: {
        marginLeft: 0,
        marginRight: 0,
    },
}));

const Root = styled(Box)(({ theme }) => ({
    display: "flex",
    [theme.breakpoints.down("md")]: {
        flexDirection: "column",
    },
}));

const TextDesctop = styled(Box)(({ theme }) => ({
    color: "#3E3E3E",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
        display: "none",
    },
}));

const TextMobile = styled(Box)(({ theme }) => ({
    display: "none",
    [theme.breakpoints.down("md")]: {
        color: "#3E3E3E",
        display: "flex",
        alignItems: "center",
    },
}));

const GridElem = styled(Grid)(({ theme }) => ({
    marginTop: 20,
    [theme.breakpoints.down("md")]: {
        marginTop: 50,
    },
}));

const Footer = () => {
    const navigate = useNavigate();
    const params = useLocation();

    const pathname = (pathname) => {
        switch (pathname) {
            case "/":
                return "#F6F6F6";
            default:
                return "white";
        }
    };

    const data = [
        {
            title: "Навигация",
            elems: [
                { label: "Главная", link: ROUTES.HOME },
                { label: "Документация", link: ROUTES.Documents },
                { label: "О себе", link: ROUTES.AboutMyself },
                { label: "Контакты", link: ROUTES.Contacts },
            ],
        },
        {
            title: "Контакты",
            elems: [
                { label: "Наш адрес", type: "grey" },
                {
                    label: "г. Москва, Рогова 22 к 3, Центр пластической хирургии «Эталон»",
                },
                { label: "О Режим работы", type: "grey" },
                { label: "Понедельник -  Суббота" },
                { label: "10:00 - 19:00" },
            ],
        },
    ];
    return (
        <Container
            wrapper={true}
            sx={{
                bgcolor: `${pathname(params.pathname)}`,
                pt: 5,
                pb: 5,
                mt: 16,
            }}
        >
            <Root>
                <Box
                    sx={{
                        mr: 12,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                    }}
                >
                    <BoxLogo onClick={() => navigate(ROUTES.HOME)}>
                        <Text
                            lg={32}
                            sx={{
                                fontSize: 48,
                                fontFamily: "Lora",
                                fontStyle: "normal",
                                fontWeight: 400,
                            }}
                        >
                            Dr.Lusine
                        </Text>
                    </BoxLogo>
                    <TextDesctop>
                        <img src={"/img/logofooter.png"} />
                        <Text
                            sx={{ ml: 1, fontWeight: 700, fontStyle: "normal" }}
                        >
                            все права защищены
                        </Text>
                    </TextDesctop>
                </Box>
                <Grid container spacing={1}>
                    {data.map((item, index) => (
                        <GridElem
                            sx={{ mt: 2 }}
                            item
                            key={index}
                            xl={4}
                            lg={4}
                            md={4}
                            sm={6}
                            xs={12}
                        >
                            <Text
                                sx={{
                                    fontStyle: "normal",
                                    fontFamily: "Manrope",
                                    fontWeight: 700,
                                    fontSize: 20,
                                }}
                            >
                                {item.title}
                            </Text>
                            <Box sx={{ marginTop: 1 }}>
                                {item.elems.map((itemElem, index) => (
                                    <Box key={index} sx={{ mt: 2 }}>
                                        {itemElem.link ? (
                                            <Cuslink to={itemElem.link}>
                                                <Text
                                                    sx={{
                                                        fontSize: 20,
                                                        fontWeight: 300,
                                                        fontStyle: "normal",
                                                    }}
                                                >
                                                    {itemElem.label}
                                                </Text>
                                            </Cuslink>
                                        ) : (
                                            <Text
                                                sx={{
                                                    color: itemElem.type,
                                                    fontSize: 20,
                                                    fontWeight: 300,
                                                    fontStyle: "normal",
                                                }}
                                            >
                                                {itemElem.label}
                                            </Text>
                                        )}
                                    </Box>
                                ))}
                            </Box>
                        </GridElem>
                    ))}
                    <GridElem
                        sx={{ mt: 2 }}
                        item
                        xl={4}
                        lg={4}
                        md={4}
                        sm={6}
                        xs={12}
                    >
                        <Text
                            sx={{
                                fontStyle: "normal",
                                fontFamily: "Manrope",
                                fontWeight: 700,
                                fontSize: 20,
                            }}
                        >
                            +7 964 788 77 88
                        </Text>
                        <Box sx={{ marginTop: 1 }}>
                            <Text
                                sx={{
                                    color: "grey",
                                    fontSize: 20,
                                    fontWeight: 300,
                                    fontStyle: "normal",
                                }}
                            >
                                Мы в социальных сетях
                            </Text>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    width: 180,
                                    mt: 2,
                                }}
                            >
                                <IconButton
                                    onClick={() =>
                                        window.location.assign(
                                            "https://t.me/DrLusineWork"
                                        )
                                    }
                                >
                                    <img src="/img/Group2461.svg" />
                                </IconButton>
                                <NavHashLink
                                    to="/#form-anchor"
                                    smooth
                                    style={{ textDecoration: "none" }}
                                >
                                    <IconButton>
                                        <img src="/img/Group2459.svg" />
                                    </IconButton>
                                </NavHashLink>
                                <IconButton
                                    onClick={() =>
                                        window.location.assign(
                                            "https://instagram.com/dr.lusine?igshid=YmMyMTA2M2Y="
                                        )
                                    }
                                >
                                    <img src="/img/Group39.svg" />
                                </IconButton>
                            </Box>
                        </Box>
                    </GridElem>
                </Grid>
                <TextMobile>
                    <img src={"/img/logofooter.png"} />
                    <Text sx={{ ml: 1, fontWeight: 700, fontStyle: "normal" }}>
                        все права защищены
                    </Text>
                </TextMobile>
            </Root>
        </Container>
    );
};

export default Footer;
