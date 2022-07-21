import React, { useState, useRef } from "react";
import { Box, TextField } from "@mui/material";
import { styled } from "@mui/system";

import { Container, Text, Button, AnalysisModal } from "../../../components";

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

const LastScreen = () => {
    const [open, setOpen] = useState(false);

    const description = useRef(null);

    const handleClose = () => {
        setOpen(false);
    };

    const PostMassage = (e) => {
        e.preventDefault();
        window.location.assign(
            `https://web.whatsapp.com/send/?phone=89647887788&text=${description.current.value}&type=phone_number&app_absent=0`
        );
    };

    return (
        <Main wrapper={true} minHeight={400}>
            <Box sx={{ display: "flex", justifyContent: "center", mb: 10 }}>
                <Button sx={{ width: 500 }} onClick={() => setOpen(true)}>
                    Узнать какие анализы нужны
                </Button>
            </Box>
            <AnalysisModal open={open} handleClose={handleClose} />
            <Text
                sx={{ fontSize: 48, color: "#3E3E3E", textAlign: "center" }}
                md={30}
                sm={24}
            >
                Свяжитесь с нами если
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
                        Укажите удобный для вас <br /> мессенджер
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
                        Более 1000 довольных клиентов
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
                        обработки персональных данных
                    </Text>
                </Form>
            </Box>
        </Main>
    );
};

export default LastScreen;
