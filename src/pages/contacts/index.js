import React, { useState } from "react";
import { styled } from "@mui/material";
import { Box, Grid, IconButton } from "@mui/material";
import { NavHashLink } from "react-router-hash-link";

import { Text } from "../../components";

const Main = styled(Box)(({ theme }) => ({
    width: "50%",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.down("xl")]: {
        width: "60%",
    },
    [theme.breakpoints.down("lg")]: {
        width: "70%",
    },
    [theme.breakpoints.down("md")]: {
        width: "80%",
    },
}));

const Wrapper = styled(Grid)(({ theme }) => ({
    background: "white",
    height: 600,
    color: "#3E3E3E",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
        height: 333,
    },
}));

const MapText = styled(Text)(({ theme }) => ({
    marginTop: 50,
    fontSize: 24,
    [theme.breakpoints.down("sm")]: {
        marginTop: 20,
    },
}));

const Map = styled("iframe")(({ theme }) => ({
    marginTop: "-23px",
    height: 600,
    [theme.breakpoints.down("sm")]: {
        height: 300,
    },
}));

const Contacts = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const [mapCenter, setMapCenter] = useState([62.027316, 129.732271]);
    const [zoom, setZoom] = useState(13);

    return (
        <Grid container spacing={3} sx={{ mt: "-80px" }}>
            <Grid
                item
                lg={6}
                xl={6}
                md={6}
                xs={12}
                sm={12}
                // sx={{
                //     display: "flex",
                //     backgroundImage: "url(/img/map.png)",
                //     backgroundRepeat: "no-repeat",
                //     backgroundSize: "cover",
                //     height: 600,
                // }}
            >
                <Map
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A3c93819ea15b06feedf7dccd4574dc663faa21c26bd76710b00f14f6db2eb70d&amp;source=constructor"
                    width="100%"
                    frameBorder="0"
                ></Map>
            </Grid>
            <Wrapper item lg={6} xl={6} md={6} sm={12} xs={12}>
                <Main>
                    <Text
                        sx={{ fontSize: 40, fontFamily: "Lora" }}
                        lg={35}
                        sm={24}
                    >
                        Ваша связь с нами
                    </Text>
                    <Box>
                        <MapText sx={{ mt: 7 }} lg={20} sm={16}>
                            Наш адрес
                        </MapText>
                        <MapText lg={20} sm={12}>
                            г. Москва, Рогова 22 к 3, Центр пластической
                            хирургии «Эталон»
                        </MapText>
                        <MapText lg={20} sm={16} sx={{ fontWeight: 600 }}>
                            +7 964 788 77 88
                        </MapText>
                        <Box>
                            <MapText lg={20} sm={16}>
                                Мы в соц. сетях
                            </MapText>
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
                                    <img src="/img/Group57.png" />
                                </IconButton>
                                <NavHashLink
                                    to="/#form-anchor"
                                    smooth
                                    style={{ textDecoration: "none" }}
                                >
                                    <IconButton>
                                        <img src="/img/Groupwhat2459.png" />
                                    </IconButton>
                                </NavHashLink>
                                <IconButton
                                    onClick={() =>
                                        window.location.assign(
                                            "https://instagram.com/dr.lusine?igshid=YmMyMTA2M2Y="
                                        )
                                    }
                                >
                                    <img src="/img/Group59.png" />
                                </IconButton>
                            </Box>
                        </Box>
                    </Box>
                </Main>
            </Wrapper>
        </Grid>
    );
};

export default Contacts;
