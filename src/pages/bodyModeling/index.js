import React, { useEffect } from "react";

import { Box } from "@mui/material";

import StartScreen from "./components/StartScreen";
import SecondScreen from "./components/SecondScreen";
import { ThreeScreen } from "../../components";
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
        </Box>
    );
};

export default BodyModeling;
