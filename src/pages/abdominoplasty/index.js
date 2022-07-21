import React, { useEffect } from "react";

import { Box } from "@mui/material";
import { styled } from "@mui/system";
import { useLocation } from "react-router-dom";

import {
    Container,
    Text,
    StartScreen,
    SecondScreen,
    ThreeScreen,
    ResultsSlider,
} from "../../components";

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
    }, [location.pathname]);

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

    // const resultsData = [
    //     "image160",
    //     "image162",
    //     "image163",
    //     "image164",
    //     "image165",
    //     "image167",
    //     "image168",
    //     "image170",
    //     "image171",
    //     "image172",
    //     "image185",
    // ];

    return (
        <Box>
            <StartScreen
                text="Пластическая операция для подтяжки и коррекции формы живота"
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
            <ResultsSlider />
        </Box>
    );
};

export default Abdominoplasty;
