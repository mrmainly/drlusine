import React from "react";

import { Box } from "@mui/material";

import StartScreen from "./components/StartScreen";
import SecondScreen from "./components/SecondScreen";
import { ThreeScreen } from "../../components";
import FourScreen from "./components/FourScreen";

const Mammoplasty = () => {
    const data = [
        {
            label: "Увеличение груди через ареолу",
            value: "375 тыс. руб",
        },
        {
            label: "Увеличение тубулярной груди",
            value: "420 тыс. руб",
        },
        {
            label: "Подтяжка груди по ареоле",
            value: "450 тыс. руб",
        },
        {
            label: "Якорная подтяжка",
            value: "650 тыс. руб",
        },
        {
            label: "Подтяжка груди без имплантов",
            value: "270 тыс. руб",
        },
        {
            label: "Увеличение груди с заменой имплантов",
            value: "490 тыс. руб",
        },
        {
            label: "Коррекция размеров ареол",
            value: "135 тыс. руб",
        },
    ];
    return (
        <Box>
            <StartScreen />
            <SecondScreen />
            <ThreeScreen
                img="/img/Rectangle241.png"
                title="Маммопластика"
                data={data}
            />
            <FourScreen />
        </Box>
    );
};

export default Mammoplasty;
