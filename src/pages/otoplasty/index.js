import React, { useEffect } from "react";

import { Box } from "@mui/material";

import StartScreen from "./components/StartScreen";
import SecondScreen from "./components/SecondScreen";
// import ThreeScreen from "./components/ThreeScreen";
import { ThreeScreen } from "../../components";

const Otoplasty = () => {
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
            label: "Коррекция лопоухости",
            value: "125 тыс. руб",
        },
        {
            label: "Коррекция лопоухости 1 сторона",
            value: "100 тыс. руб",
        },
        {
            label: "Коррекция мочки уха",
            value: "60 тыс. руб",
        },
    ];
    return (
        <Box>
            <StartScreen />
            <SecondScreen />
            <ThreeScreen
                data={data}
                img="/img/Rectangle2456.png"
                title="Отопластика"
            />
        </Box>
    );
};

export default Otoplasty;
