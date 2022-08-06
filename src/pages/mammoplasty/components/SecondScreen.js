import React from "react";
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/system";

import { Container, Text } from "../../../components";

const Root = styled(Container)(({ theme }) => ({
    marginTop: 110,
    [theme.breakpoints.down("sm")]: {
        marginTop: 60,
    },
}));

const SecondScreen = () => {
    return (
        <Root>
            <Text sx={{ fontSize: 40, textAlign: "center" }} sm={24}>
                Описание услуги
            </Text>
            <Text
                sx={{
                    fontSize: 24,
                    fontWeight: 500,
                    mt: 8,
                    fontFamily: "Manrope",
                }}
                sm={16}
            >
                Эстетика женской груди, как предмет восхищения ни одно столетие!
                Хирургическая коррекция груди – одна из самых востребованных
                пластических операций. Современные импланты груди, изготовленные
                из биологически нейтральной многослойной оболочки и гелевого
                наполнителя, не вредят здоровью женщины. Увеличение молочных
                желёз, коррекция птоза, замена старых имплантов - все это
                делается в совершенстве нашими хирургами благодаря
                индивидуальному подходу к каждой пациентке!
            </Text>
        </Root>
    );
};

export default SecondScreen;
