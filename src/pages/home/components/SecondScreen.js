import React from "react";
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/system";

import { Container, Text, BenefitsCard } from "../../../components";

const Root = styled(Container)(({ theme }) => ({
    backgroundColor: "white",
    color: "#3E3E3E",
    paddingBottom: 100,
    [theme.breakpoints.down("xl")]: {
        marginTop: "-20px",
    },
}));

const MainGrid = styled(Grid)(({ theme }) => ({
    marginTop: 60,
    width: "85%",
    [theme.breakpoints.down("sm")]: {
        width: "100%",
        marginTop: 10,
    },
}));

const SecondScreen = () => {
    return (
        <Root wrapper={true} minHeight={600}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Text
                    sx={{
                        fontSize: 48,
                        fontFamily: "Lora",
                        fontStyle: "normal",
                    }}
                    sm={30}
                >
                    Наши преимущества
                </Text>
                <MainGrid container spacing={2}>
                    <Grid item lg={3.5} xl={3.5} md={4} sm={12} xs={12}>
                        <BenefitsCard
                            img="/img/face.png"
                            text="Большой опыт в эстетической медицине"
                        />
                    </Grid>
                    <Grid item lg={5} xl={5} md={4} sm={12}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <BenefitsCard text="Комплексый подход к операции, трепетно относимся к мелочам и деталям" />
                            </Grid>
                            <Grid item xs={12}>
                                <BenefitsCard text="Приятное общение с клиентами, предоставление удобств и качества работы" />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={3} xl={3.5} md={4} sm={12} xs={12}>
                        <BenefitsCard
                            img="/img/ruka.png"
                            text="Множество положительных отзывов и впечатляющих результатов"
                        />
                    </Grid>
                </MainGrid>
            </Box>
        </Root>
    );
};

export default SecondScreen;
