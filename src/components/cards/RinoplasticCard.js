import React from "react";
import { styled } from "@mui/system";
import { Box, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { Text, Button } from "..";
import ROUTES from "../../routes";

const CardRinoplastic = styled(Box)(({ theme }) => ({
    backgroundColor: "#FFF1D8",
    height: 380,
    marginTop: 80,
    borderRadius: 20,
    position: "relative",
    [theme.breakpoints.down("md")]: {
        height: 280,
    },
    [theme.breakpoints.down("sm")]: {
        display: "none",
    },
}));

const GridText = styled(Grid)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    paddingLeft: 40,
}));

const Img = styled("img")(({ theme }) => ({
    height: 380,
    objectFit: "cover",
    [theme.breakpoints.down("md")]: {
        height: 280,
        width: "100%",
    },
}));

const MyButton = styled(Button)(({ theme }) => ({
    position: "absolute",
    background: "white",
    color: "#3E3E3E",
    boxShadow: " 0px 4px 26px rgba(0, 0, 0, 0.25)",
    width: 255,
    height: 75,
    left: "50%",
    transform: "translate(-50%, -50%)",
    top: 380,
    [theme.breakpoints.down("md")]: {
        top: 283,
    },
}));

const RinoplasticCard = () => {
    const navigate = useNavigate();
    return (
        <CardRinoplastic>
            <Grid container>
                <GridText item lg={6} xl={6} md={6} sm={6}>
                    <Text
                        sx={{
                            fontSize: 24,
                            fontFamily: "Manrope",
                            fontWeight: 700,
                            textAlign: "center",
                        }}
                        md={20}
                    >
                        Ринопластика
                    </Text>
                    <Text
                        sx={{
                            mt: 1.7,
                            fontFamily: "Manrope",
                            fontWeight: 600,
                        }}
                        md={11}
                    >
                        Нос человека выполняет не только дыхательную, но и
                        определенную эстетическую функцию. Именно на нем, как на
                        наиболее выступающей части лица, преимущественно
                        концентрируется внимание окружающих. Неправильная форма
                        носа может испортить даже привлекательную в остальном
                        внешность. В таких случаях на помощь приходит
                        пластическая хирургия. Операция, предназначенная для
                        придания носу необходимой формы и размера, называется
                        ринопластика.
                    </Text>
                </GridText>
                <Grid item lg={6} xl={6} md={6} sm={6}>
                    <Img src="/img/rinoplastika.png" />
                </Grid>
            </Grid>
            <MyButton onClick={() => navigate(ROUTES.RHINOPLASTY)}>
                <Text sx={{ fontSize: 20, fontFamily: "Manrope" }}>
                    Подробнее
                </Text>
            </MyButton>
        </CardRinoplastic>
    );
};

export default RinoplasticCard;
