import React, { useEffect } from "react";

import { Box } from "@mui/material";

import StartScreen from "./components/StartScreen";
import SecondScreen from "./components/SecondScreen";
import { ThreeScreen, ResultsSlider, Text } from "../../components";

const Cosmetology = () => {
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
            label: "Коррекция носа",
            value: "от 28 тыс. руб",
        },
        {
            label: "Увеличение губ",
            value: "от 22 тыс. руб",
        },
        {
            label: "Кольца Венеры",
            value: "от 20 тыс. руб",
        },
        {
            label: "Коррекция носокубной борозды",
            value: "от 20 тыс. руб",
        },
        {
            label: "Увеличение глаз ботексом",
            value: "от 12 тыс. руб",
        },
        {
            label: "Коллекция носослезной бороды",
            value: "от 22 тыс. руб",
        },
    ];
    const resultsData = [
        { img: "IMG_7956" },
        { img: "IMG_4009" },
        { img: "image170" },
        { img: "IMG_4236", text: "Безоперационная ринопластика" },
        { img: "IMG_4242", text: "Безоперационная ринопластика" },
        { img: "IMG_4235", text: "Безоперационная ринопластика" },
        { img: "IMG_4241", text: "Носослезная борозда и золоте сечение" },
    ];

    return (
        <Box>
            <StartScreen />
            <SecondScreen />
            <ThreeScreen
                img="/img/plastic-face.png"
                title="Косметология"
                data={data}
            />
            <Box sx={{ mt: 7 }}>
                <Text
                    sx={{ fontSize: 42, textAlign: "center", mb: "-30px" }}
                    sm={25}
                >
                    Результаты
                </Text>
                <ResultsSlider data={resultsData} height={800} heightSm={300} />
            </Box>
        </Box>
    );
};

export default Cosmetology;
