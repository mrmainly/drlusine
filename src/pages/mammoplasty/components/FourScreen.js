import React from "react";

import {
    AccordionSummary,
    AccordionDetails,
    Accordion,
    Typography,
    Box,
} from "@mui/material";
import { styled } from "@mui/system";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { Text, Container } from "../../../components";

const AccordionStyle = styled(Accordion)(({ theme }) => ({
    background: "#F6F6F6",
    marginTop: 30,
    boxShadow: "none",
    "&.MuiAccordion-root:before": {
        backgroundColor: "#F6F6F6",
    },
    [theme.breakpoints.down("sm")]: {
        marginTop: 0,
    },
}));

const Main = styled(Box)(({ theme }) => ({
    marginTop: 140,
    [theme.breakpoints.down("sm")]: {
        marginTop: 48,
    },
}));

const MyContainer = styled(Container)(({ theme }) => ({
    marginTop: 150,
    [theme.breakpoints.down("sm")]: {
        marginTop: 63,
    },
}));

const FourScreen = () => {
    const data = [
        {
            question: "1) В каком возрасте лучше делать маммопластику?",
            answer: "Это эстетическая операция, делают ее, как правило, не по медицинским показаниям, а когда возникает желание и потребность улучшить свою внешность. Это может быть и 18, и 30, и 40 лет, я делал маммопластику и женщине в 70 лет. Но чаще всего приходят пациентки от 20 до 45 лет.",
        },
        {
            question:
                "2) Безопасно ли ставить имплантаты, если не было беременности и кормления грудью, но планируется?",
            answer: "Долгое время, еще на заре применения имплантатов считалось, лучше проводить операцию после рождения ребенка. Но сейчас появились имплантаты нового поколения и эти рекомендации потеряли свою актуальность. Никаких противопоказаний для не рожавших к установке имплантатов сейчас нет. Многие мои пациентки делали грудь до рождения ребенка.",
        },
        {
            question:
                "3) Есть ли срок годности у имплантатов после которого они подлежат замене?",
            answer: "Если иметь ввиду современные имплантаты, то можно говорить о пожизненном безвредном нахождении грудных имплантатов внутри организма, но никто никогда не даст гарантию на пожизненный результат, на то, что грудь сохранит свою форму. Женщина может родить и это может привести в деформации груди. Она может поправиться или похудеть, имплантат же не меняется, и насколько он будет пропорционален через 10-15 лет, предугадать сложно. Может потребоваться и подтяжка и замена имплантатов.",
        },
        {
            question:
                "4) Может ли увеличение груди привести к появлению растяжек на коже?",
            answer: "Скорее наоборот, установка имплантатов скрадывает наличие растяжек.",
        },
        {
            question:
                "5) Можно ли совместить операцию по увеличению груди с коррекцией асимметрии, птоза?",
            answer: "Перед операцией врач детально проводит контрольные измерения, чтобы пациентке одновременно устранить асимметрию с установкой имплантов. Для коррекции птоза в некоторых случаях дополнительно проводится подтяжка груди.",
        },
    ];

    return (
        <MyContainer>
            <Text sx={{ fontSize: 48, textAlign: "center" }} sm={28}>
                Актуальные вопросы врачу:
            </Text>
            <Main>
                {data.map((faq, index) => (
                    <AccordionStyle key={index} elevation={0}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Text sx={{ fontSize: 36 }} sm={12}>
                                {faq.question}
                            </Text>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Text
                                sx={{ fontSize: 32, color: "#969696" }}
                                sm={10}
                            >
                                {faq.answer}
                            </Text>
                        </AccordionDetails>
                    </AccordionStyle>
                ))}
            </Main>
        </MyContainer>
    );
};

export default FourScreen;
