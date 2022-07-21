import React, { useEffect } from "react";

import { Box } from "@mui/material";

import StartScreen from "./components/StrartScreen";
import {
    SecondScreen,
    ThreeScreen,
    ResultsSlider,
    Text,
} from "../../components";

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

    const resultsData = [
        "IMG_3860",
        "IMG_3859",
        "IMG_3858",
        "IMG_3857",
        "IMG_3856",
        "IMG_3855",
        "IMG_3854",
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

export default Rhinoplasty;
