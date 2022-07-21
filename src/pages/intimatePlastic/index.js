import React, { useEffect } from "react";

import { Box } from "@mui/material";

import StartScreen from "./components/StartScreen";
import SecondScreen from "./components/SecondScreen";
import { ThreeScreen } from "../../components";

const IntimatePlastic = () => {
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
            label: "Лабиопластика",
            value: "от 70 тыс. руб",
        },
        {
            label: "Вагинопластика",
            value: "от 110 тыс. руб",
        },
        {
            label: "Гименопоастика",
            value: "от 45 тыс. руб",
        },
    ];
    return (
        <Box>
            <StartScreen />
            <SecondScreen />
            <ThreeScreen
                img="/img/60891a41034701.png"
                title="Услуги и цены"
                data={data}
            />
        </Box>
    );
};

export default IntimatePlastic;
