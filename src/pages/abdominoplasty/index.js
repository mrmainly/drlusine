import React, { useEffect } from "react";

import { Box } from "@mui/material";
import { styled } from "@mui/system";
import { useLocation } from "react-router-dom";

import {
    Container,
    Text,
    SecondScreen,
    ThreeScreen,
    ResultsSlider,
} from "../../components";
import StartScreen from "./components/StartScreen";

const Abdominoplasty = () => {
    const location = useLocation();

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
            label: "Абдоминопластика",
            value: "375 тыс. руб",
        },
        {
            label: "Мини Абдоминопластика",
            value: "100 тыс. руб",
        },
        {
            label: "Перенос пупка",
            value: "70 тыс. руб",
        },
        {
            label: "Ушивание диастаза",
            value: "100 тыс. руб",
        },
    ];

    const resultsData = [{ img: "IMG_3951" }, { img: "IMG_4256" }];

    return (
        <Box>
            <StartScreen
                text="Абдоминопластика (пластика живота) – это операция по удалению излишков кожи. Эта операция позволяющая добиться: - Укрепления мышечного каркаса брюшной стенки; 
                -Устранения так называемого кожно-жирового «фартука»; 
                -Улучшения и подтяжки состояния кожи; Устранения дряблость кожи, растяжек (стрий), грыж."
                title="Абдоминопластика"
                img="/img/533654-11.png"
            />
            <SecondScreen
                texts={[
                    "Операция имеет два вида. Классическая пластика живота является хирургическим вмешательством, выполняемым для устранения деформаций передней брюшной стенки. Данную абдоминопластику проводят в случае наличия большой кожно-жировой складки. Этот вид операции неминуемо ведет к смещению пупка.",
                    "Мини абдоминопластика показана молодым женщинам, желающим устранить растяжки после родов, а также людям с небольшим, но трудно поддающимся самостоятельной коррекции «жировым животиком». Смещения пупка при проведении ограниченной абдоминопластики не происходит",
                ]}
            />
            <ThreeScreen
                data={data}
                title="Абдоминопластика"
                img="/img/Rectangle2.png"
            />
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

export default Abdominoplasty;
