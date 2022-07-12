import React from "react";
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/system";

import { Container, Text, ReviewSlider } from "../../../components";

const Main = styled(Container)(({ theme }) => ({
    paddingTop: 100,
    background: "white",
    marginBottom: "-200px",
    paddingBottom: 300,
}));

const Form = styled("div")(({ theme }) => ({
    width: 490,
    height: 660,
    backgroundImage: "url(/img/Rectangle36.png)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    marginTop: 80,
    paddingTop: 40,
    paddingLeft: 10,
    paddingRight: 10,
    [theme.breakpoints.down("md")]: {
        width: 300,
    },
}));

const LastScreen = () => {
    return (
        <Main wrapper={true} minHeight={400}>
            <Text
                sx={{ fontSize: 48, color: "#3E3E3E", textAlign: "center" }}
                md={30}
                sm={24}
            >
                Свяжитесь с нами если
                <br /> остались вопросы
            </Text>
            <Form>
                <Text
                    sx={{
                        fontSize: 24,
                        textAlign: "center",
                        fontFamily: "Manrope",
                        fontWeight: 700,
                    }}
                >
                    Укажите удобный
                    <br /> для вас мессенджер
                </Text>
                <Text
                    sx={{
                        fontrSize: 16,
                        fontFamily: "Manrope",
                        textAlign: "center",
                        mt: 1,
                        color: "#9C9C9C",
                    }}
                >
                    Более 300 довольных клиентов
                </Text>
            </Form>
            <a href="tg://resolve?domain=79647887788">ffff</a>
        </Main>
    );
};

export default LastScreen;
