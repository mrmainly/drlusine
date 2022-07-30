import React, { useEffect } from "react";

import { Box } from "@mui/material";

import { ThreeScreen, ResultsSlider, Text } from "../../components";
import StartScreen from "./components/StartScreen";
import SecondScreen from "./components/SecondScreen";
import FourScreen from "./components/FourScreen";

const Blepharoplasty = () => {
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

    const resultsData = [
        "image185",
        "image172",
        "image171",
        "image170",
        "image168",
        "IMG_3941",
        "IMG_4023",
        "IMG_4020",
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
            <Box sx={{ mt: 7 }}>
                <Text
                    sx={{ fontSize: 42, textAlign: "center", mb: "-30px" }}
                    sm={24}
                >
                    Результаты
                </Text>
                <ResultsSlider data={resultsData} height={800} heightSm={300} />
            </Box>
        </Box>
    );
};

export default Blepharoplasty;
