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
                "1) Сколько жира можно удалить с помощью липосакции за один раз?",
            answer: "По разным данным рекомендовано удалять не более 10% от общей массы тела объём жировой ткани за один раз. Такого объема достаточно, чтобы удалить проблемные зоны.",
        },
        {
            question:
                "2) Интересно, как делается пресс при спортивном липоскульптурировании?",
            answer: "Во время липомоделирования жир изымают локально, обводя мышцы, удаляя разный уровень жировой прослойки в разных областях. Другими словами, удаляется жировая ткань вокруг мышц. Их рельеф под жировой клетчаткой есть даже у тех, кто не занимается спортом. Во время реабилитации отказаться от спорта необходимо на 2-3 месяца, но после он даже рекомендуется, чтобы поддерживать и улучшать результат.",
        },
        {
            question:
                "3 Возможно ли, что после липофилинга ягодиц жир рассасывается?",
            answer: "Липофилинг ягодиц всегда делается с небольшой компенсацией с расчетом того, что какой-то процент жира выведется за время реабилитации. Как правило, после липомоделирования приживается 60-70% жировой ткани, и этот жир остается на много лет, если поддерживать фигуру, избегая дефицита и профицита калорий, то и результат может сохраниться на всю жизнь.",
        },
        {
            question:
                "4) Нужно ли после липосакции соблюдать диету? Что произойдёт, если сильно поправится, где будет откладываться жир?",
            answer: "Липосакция не влияет на ваши привычки, не может вас заставить заниматься спортом или перестать неправильно питаться. Для поддержания достигнутого результата желательно соблюдать режим питания.  В зонах, где была липосакция, жировые клетки будут медленней увеличиваться, чем клетки в других областях. Другими словами – жир начнет быстрей откладываться в других зонах.",
        },
        {
            question: "5) Через какое время можно будет заниматься спортом?",
            answer: "Ограничения по занятиям спортом, фитнесом или активной физической нагрузкой распространяются на 2-4 недели после операции. Как правило, при малом объеме вмешательстве, например, только колени, ограничения снимаются уже через неделю.",
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
