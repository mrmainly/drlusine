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
            question:
                "Имеете ли вы необходимую квалификацию и сертификацию для проведения подобной процедуры?",
            answer: "Это – первый вопрос, который задают доктору. Попросите его рассказать о полученном им образовании, повышении квалификации, полученных документах и опыте проведения этой операции. Конечно же, не стоит набрасываться на хирурга с допросами, но полное равнодушие в этом вопросе -это опрометчиво!",
        },
        {
            question: "Какие виды липосакции существуют? ",
            answer: "На сегодняшний день существует несколько видов липосакции. Подбор вышла операции именно вам зависит от ряда факторов, в том числе, от зоны воздействия, серьезности предполагаемой коррекции и наличия специального оборудования для выполнения того или иного вида липосакции. Самый востребованный вид  – тумесцентная липосакция. В ходе процедуры в зону воздействия вводится раствор Кляйна, содержащий лидокаина, раствор соды и адреналин, а после тридцатиминутной экспозиции производится отсос жировой ткани. Так же разделяют липосакции по зонам : локальный(живот, колени,бёдра) и комплексный (сразу несколько зон)!",
        },
        {
            question: "Насколько долго сохраняется эффект после липосакции?",
            answer: "Липосакция предназначена для устранения так называемых «жировых ловушек». Во время операции разрушаются жировые клетки, но далеко не все.  Если человек сделал все возможное до операции и поддерживает свое состояние после операции – эффект очень длительный. Если идут нарушения режима питания то могут увеличиться оставшиеся жировые клетки в той же зоне или начнут реагировать клетки других областей. Все зависит от Вас.",
        },
    ];

    return (
        <MyContainer>
            <Text sx={{ fontSize: 48, textAlign: "center" }} sm={28}>
                Частые вопросы
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
