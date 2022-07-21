import React, { useEffect } from "react";

import { Box } from "@mui/material";

import StartScreen from "./components/StartScreen";
import SecondScreen from "./components/SecondScreen";
import { ThreeScreen } from "../../components";

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
    return (
        <Box>
            <StartScreen />
            <SecondScreen />
            <ThreeScreen
                img="/img/plastic-face.png"
                title="Косметология"
                data={data}
            />
        </Box>
    );
};

export default Cosmetology;
