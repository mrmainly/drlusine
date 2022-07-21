import React, { useState, useRef, useEffect } from "react";
import { Box, TextField, Button } from "@mui/material";
import { styled } from "@mui/system";

import { Container, Text, AnalysisModal } from "../../../components";

const Main = styled(Container)(({ theme }) => ({
    paddingTop: 100,
    background: "white",
    marginBottom: "-200px",
    paddingBottom: 100,
}));

const Input = styled(TextField)(({ theme }) => ({
    background: "#FFFAED",
    marginTop: 23,
    width: "80%",
    [theme.breakpoints.down("sm")]: {
        width: "90%",
    },
}));

const Form = styled("form")(({ theme }) => ({
    width: 490,
    height: 670,
    backgroundImage: "url(/img/Rectangle3634.png)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 80,
    paddingTop: 35,
    paddingLeft: 10,
    paddingRight: 10,
    [theme.breakpoints.down("sm")]: {
        backgroundImg: "none",
        backgroundColor: "#FFF1D8",
        borderRadius: 16,
        height: "max-content",
        paddingBottom: 35,
    },
}));

const CusButton = styled(Button)(({ theme }) => ({
    background:
        "radial-gradient(84.91% 84.91% at 50.14% 6.9%, rgba(255, 255, 255, 0.43) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(358.83deg, rgba(0, 0, 0, 0.07) 24.23%, rgba(0, 0, 0, 0) 132.68%), #FFE3B2;",
    boxShadow: "0px 4px 5px rgba(0, 0, 0, 0.25), 0px 4px 0px #DECDA3",
    color: "#3E3E3E",
    width: 320,
    height: 80,
    fontSize: 24,
    fontWeight: "500",
    [theme.breakpoints.down("sm")]: {
        width: 253,
        minHeight: 50,
        fontSize: 14,
    },
    "&:hover": {
        color: "grey",
        backgroundColor: "#e6e9ed",
    },

    zIndex: 3,
}));

const LastScreen = () => {
    const [open, setOpen] = useState(false);
    const [mobileView, setMobileView] = useState(false);

    const description = useRef(null);

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 1200
                ? setMobileView(true)
                : setMobileView(false);
        };
        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());
    }, []);

    const handleClose = () => {
        setOpen(false);
    };

    const PostMassage = (e) => {
        e.preventDefault();
        window.location.assign(
            mobileView
                ? `https://api.whatsapp.com/send/?phone=79647887788&text=${description.current.value}`
                : `https://web.whatsapp.com/send/?phone=89647887788&text=${description.current.value}&type=phone_number&app_absent=0`
        );
    };

    return (
        <Main wrapper={true} minHeight={400}>
            <Box sx={{ display: "flex", justifyContent: "center", mb: 10 }}>
                <CusButton onClick={() => setOpen(true)}>
                    Необходимые анализы, перед провидением опирации
                </CusButton>
            </Box>
            <AnalysisModal open={open} handleClose={handleClose} />
            <Text
                sx={{ fontSize: 48, color: "#3E3E3E", textAlign: "center" }}
                md={30}
                sm={24}
            >
                Свяжитесь с нами, если
                <br /> остались вопросы
            </Text>
            <Box
                sx={{ display: "flex", justifyContent: "center" }}
                id="form-anchor"
            >
                <Form onSubmit={PostMassage}>
                    <Text
                        sx={{
                            fontSize: 24,
                            textAlign: "center",
                            fontFamily: "Manrope",
                            fontWeight: 700,
                        }}
                        sm={18}
                    >
                        Заявка на запись
                        <br /> через Whatsapp
                    </Text>
                    <Text
                        sx={{
                            fontrSize: 16,
                            fontFamily: "Manrope",
                            textAlign: "center",
                            mt: 1,
                            color: "#9C9C9C",
                        }}
                        sm={14}
                    >
                        Более 3000 довольных клиентов
                    </Text>
                    <Input
                        inputRef={description}
                        id="outlined-multiline-static"
                        multiline
                        fullWidth
                        variant="outlined"
                        color="primary"
                        aria-label="maximum height"
                        minRows={6}
                        placeholder="Ваше сообщение"
                        required
                    />
                    <Button sx={{ mt: 3 }} type="submit">
                        записаться{" "}
                    </Button>
                    <Text
                        sx={{
                            fontSize: 18,
                            textAlign: "center",
                            fontFamily: "Manrope",
                            fontWeight: 500,
                            color: "#9C9C9C",
                            mt: 2.5,
                        }}
                        sm={12}
                    >
                        Нажимая на кнопку вы соглашаетесь с<br /> политикой
                        обработки, персональных данных
                    </Text>
                </Form>
            </Box>
        </Main>
    );
};

export default LastScreen;
