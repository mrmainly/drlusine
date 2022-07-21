import React, { useEffect } from "react";

import { Box } from "@mui/material";

import StartScreen from "./components/StartScreen";
import SecondScreen from "./components/SecondScreen";
import { ThreeScreen, ResultsSlider, Text } from "../../components";
import FourScreen from "./components/FourScreen";

const BodyModeling = () => {
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
            label: "1 стадия",
            value: "375 тыс. руб",
        },
        {
            label: "2 стадия",
            value: "420 тыс. руб",
        },
        {
            label: "3 стадия",
            value: "450 тыс. руб",
        },
    ];

    const resultsData = [
        "image160",
        "image162",
        "image163",
        "image164",
        "IMG_3509",
        "IMG_3478",
    ];

    return (
        <Box>
            <StartScreen />
            <SecondScreen />
            <ThreeScreen
                title="Моделирование тела"
                img="/img/Rectangle24661.png"
                data={data}
            />
            <FourScreen />
            <Box sx={{ mt: 7 }}>
                <Text sx={{ fontSize: 42, textAlign: "center", mb: "-30px" }}>
                    Результаты
                </Text>
                <ResultsSlider data={resultsData} />
            </Box>
        </Box>
    );
};

export default BodyModeling;
