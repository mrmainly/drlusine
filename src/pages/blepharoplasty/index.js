import React from "react";

import { Box } from "@mui/material";

import { ThreeScreen } from "../../components";
import StartScreen from "./components/StartScreen";
import SecondScreen from "./components/SecondScreen";
// import ThreeScreen from "./components/ThreeScreen";
import FourScreen from "./components/FourScreen";

const Blepharoplasty = () => {
    const data = [
        {
            label: "Верхняя",
            value: "375 тыс. руб",
        },
        {
            label: "Нижняя",
            value: "420 тыс. руб",
        },
        {
            label: "Круговая",
            value: "450 тыс. руб",
        },
        {
            label: "Блефаропластика азиатских глаз",
        },
        {
            label: "Верхняя",
            value: "450 тыс. руб",
        },
        {
            label: "Нижняя",
            value: "450 тыс. руб",
        },
    ];
    return (
        <Box>
            <StartScreen />
            <SecondScreen />
            <ThreeScreen
                img={"/img/Rectangle345345.png"}
                title="Блефаропластика"
                data={data}
            />
            <FourScreen />
        </Box>
    );
};

export default Blepharoplasty;
