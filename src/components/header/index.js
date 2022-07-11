import React, { useState, useEffect } from "react";

import {
    AppBar,
    Toolbar,
    MenuItem,
    Box,
    Drawer,
    IconButton,
    Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "@mui/system";

import { Text } from "..";
import ROUTES from "../../routes";

const Wrapper = styled(Box)(({ theme }) => ({
    background: `url(${"/img/backgroundHeader.png"})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
    zIndex: 1,
    position: "relative",
    height: 350,
    marginBottom: 80,
    [theme.breakpoints.down("lg")]: {
        height: 180,
        marginBottom: 100,
    },
}));

const Root = styled("div")(() => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    minHeight: 80,
}));

const BoxLinks = styled(Box)(({ theme }) => ({
    display: "flex",
    [theme.breakpoints.down("lg")]: {
        flexDirection: "column",
        justifyContent: "center",
    },
}));
const BoxLogo = styled(Box)(({ theme }) => ({
    color: "black",
    cursor: "pointer",
    [theme.breakpoints.down("lg")]: {
        marginLeft: 0,
        marginRight: 0,
    },
}));

const Cuslink = styled(Link)(({ theme }) => ({
    color: "black",
    textDecoration: "none",
    marginLeft: 10,
    marginRight: 10,
}));

const CustomMenuItem = styled(MenuItem)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontStyle: "normal",
    fontWeight: 600,
}));

const Header = () => {
    const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false,
    });
    const navigate = useNavigate();
    // const cookieVar = cookie.get('jwttoken')
    const { mobileView, drawerOpen } = state;

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 1200
                ? setState((prevState) => ({ ...prevState, mobileView: true }))
                : setState((prevState) => ({
                      ...prevState,
                      mobileView: false,
                  }));
        };
        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());
    }, []);

    const headerData = [
        {
            text: "Главная",
            link: "/",
        },
        {
            text: "Документация",
            link: ROUTES.Documents,
        },
        {
            text: "О себе",
            link: ROUTES.AboutMyself,
        },
        {
            text: "Контакты",
            link: ROUTES.Contacts,
        },
    ];

    const Links = () => {
        return (
            <BoxLinks>
                {headerData.map((item) => (
                    <Cuslink to={item.link} key={item.link}>
                        <CustomMenuItem>
                            <Text
                                sx={{
                                    fontWeight: 400,
                                    fontFamily: "Manrope",
                                    fontStyle: "normal",
                                }}
                            >
                                {item.text}
                            </Text>
                        </CustomMenuItem>
                    </Cuslink>
                ))}
            </BoxLinks>
        );
    };
    const Logo = () => {
        return (
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
        );
    };
    const Desktop = () => {
        return (
            <Root>
                <Logo />
                <Links />
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        color: "black",
                    }}
                >
                    <img src="/img/image12.png" />
                    <Text sx={{ ml: 1.5 }}>
                        г. Москва, Рогова 22 к 3, Центр
                        <br /> пластической хирургии «Эталон»
                    </Text>
                </Box>
            </Root>
        );
    };
    const Mobile = () => {
        const handleDrawerOpen = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: true }));
        const handleDrawerClose = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: false }));
        return (
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    alignItems: "center",
                }}
            >
                <Logo />
                <IconButton
                    {...{
                        edge: "start",
                        "aria-label": "menu",
                        "aria-haspopup": "true",
                        onClick: handleDrawerOpen,
                    }}
                    style={{ color: "#1B1642" }}
                >
                    <MenuIcon />
                </IconButton>
                <Drawer
                    {...{
                        anchor: "left",
                        open: drawerOpen,
                        onClose: handleDrawerClose,
                    }}
                >
                    <Box
                        style={{
                            width: 250,
                            padding: 15,
                            display: "flex",
                            flexDirection: "column",
                            height: "100%",
                            alignItems: "center",
                        }}
                    >
                        <Logo />
                        <Links />
                    </Box>
                </Drawer>
            </Box>
        );
    };
    return (
        <Wrapper>
            <Container
                sx={{ height: 100, display: "flex", alignItesm: "center" }}
            >
                {mobileView ? Mobile() : Desktop()}
            </Container>
        </Wrapper>
    );
};

export default Header;
