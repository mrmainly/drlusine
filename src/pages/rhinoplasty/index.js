import React, { useEffect } from "react";

import { Box } from "@mui/material";

import StartScreen from "./components/StrartScreen";
import { SecondScreen, ThreeScreen } from "../../components";

const Rhinoplasty = () => {
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
            label: "Ринопластика",
            value: "350 тыс. руб",
        },
        {
            label: "Риносептопластика",
            value: "от 390 тыс. руб",
        },
        {
            label: "Использование реберного хряща",
            value: "39 тыс. руб",
        },
    ];
    return (
        <Box>
            <StartScreen />
            <SecondScreen
                texts={[
                    "Красота - это гармония. И красивое лицо - это, прежде всего, лицо, в котором все черты в гармонии друг с другом.",
                    "Нос во многом определяет изящество и гармоничность черт лица. И зачастую даже минимальная коррекция формы или размеров носа способна изменить облик, сделать его более привлекательным. Возможно, именно поэтому ринопластика - самая востребованная операция в пластической хирургии.",
                ]}
            />
            <ThreeScreen
                data={data}
                title="Ринопластика"
                img="/img/FaceRino.png"
            />
        </Box>
    );
};

export default Rhinoplasty;
