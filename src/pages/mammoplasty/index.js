import React, { useEffect } from "react";

import { Box } from "@mui/material";

import StartScreen from "./components/StartScreen";
import SecondScreen from "./components/SecondScreen";
import { ThreeScreen, ResultsSlider, Text } from "../../components";
import FourScreen from "./components/FourScreen";

const Mammoplasty = () => {
    function backToTop() {
        if (window.pageYOffset > 0) {
            window.scrollBy(0, -80);
            setTimeout(backToTop, 10);
        }
    }

    useEffect(() => {
        backToTop();
    }, []);

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

    const resultsData = [
        "image165",
        "image167",
        "IMG_3495",
        "IMG_4006",
        "IMG_3946",
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
            <Box sx={{ mt: 7 }}>
                <Text
                    sx={{ fontSize: 42, textAlign: "center", mb: "-30px" }}
                    sm={24}
                >
                    Результаты
                </Text>
                <ResultsSlider data={resultsData} />
            </Box>
        </Box>
    );
};

export default Mammoplasty;
