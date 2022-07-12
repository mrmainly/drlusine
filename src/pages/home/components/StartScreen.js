import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/system";

import { Text, Button, Container } from "../../../components";

const Root = styled(Box)(({ theme }) => ({
    color: "#3E3E3E",
    display: "flex",
    justifyContent: "space-between",
    // [theme.breakpoints.down("lg")]: {
    //     flexDirection: "column",
    //     justifyContent: "center",
    // },
}));

const Img = styled("img")(({ theme }) => ({
    zIndex: 0,
    [theme.breakpoints.down("lg")]: {
        width: 350,
    },
    [theme.breakpoints.down("md")]: {
        display: "none",
    },
}));

const Down = styled(Box)(({ theme }) => ({
    backgroundImage: "url(/img/down.png)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: 300,
    width: "100%",
    marginTop: "-180px",
    zIndex: 1,
    position: "relative",
    [theme.breakpoints.down("lg")]: {
        marginTop: "-130px",
    },
}));

const MobileImg = styled("img")(({ theme }) => ({
    display: "none",
    [theme.breakpoints.down("md")]: {
        display: "block",
        width: 300,
    },
    [theme.breakpoints.down("sm")]: {
        width: 234,
    },
}));

const MobileBox = styled(Box)(({ theme }) => ({
    marginTop: 80,
    [theme.breakpoints.down("md")]: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 60,
    },
    [theme.breakpoints.down("sm")]: {
        marginTop: 10,
    },
}));

const StartBlog = () => {
    const elem = [
        "5 лет опыта",
        "Более 300 довольных клиентов",
        "Делаем людей уверенными, счастливыми и красивыми",
    ];
    return (
        <Box>
            <Container wrapper={true} sx={{ marginTop: "-170px" }}>
                <Root>
                    <Box sx={{ mt: 5, width: "100%" }}>
                        <Text
                            sx={{ fontSize: 64, fontFamily: "Lora" }}
                            lg={45}
                            md={40}
                            sm={28}
                        >
                            Пластический хирург
                        </Text>
                        <Text
                            sx={{ fontSize: 40, fontFamily: "Lora" }}
                            lg={30}
                            md={25}
                            sm={16}
                        >
                            Эксперт уверенности и красоты
                        </Text>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                mt: 2,
                            }}
                        >
                            {elem.map((item, index) => (
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        mt: 2.9,
                                    }}
                                    key={index}
                                >
                                    <img
                                        src={"/img/Group27.png"}
                                        style={{ height: 28, width: 28 }}
                                    />
                                    <Text
                                        sx={{
                                            fontSize: 20,
                                            marginLeft: 1.7,
                                            mt: 0.1,
                                            fontStyle: "normal",
                                            fontWeight: "500",
                                            fontFamily: "Manrope",
                                        }}
                                        sm={16}
                                    >
                                        {item}
                                    </Text>
                                </Box>
                            ))}
                        </Box>
                        <MobileBox>
                            <MobileImg src={"/img/women.png"} />
                            <Button
                                onClick={() =>
                                    (window.location.href =
                                        "https://t.me/DrLusineWork")
                                }
                            >
                                записаться
                            </Button>
                        </MobileBox>
                    </Box>
                    <Box>
                        <Img src={"/img/women.png"} />
                    </Box>
                </Root>
            </Container>
            <Down />
        </Box>
    );
};

export default StartBlog;
