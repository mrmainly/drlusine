import React from "react";

import { Box, Grid } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

import {
    Container,
    Text,
    ServicesCard,
    RinoplasticCard,
    Button,
} from "../../../components";
import ROUTES from "../../../routes";

const Root = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    [theme.breakpoints.down("md")]: {
        justifyContent: "center",
    },
}));

const MobileBox = styled(Box)(({ theme }) => ({
    display: "none",
    [theme.breakpoints.down("sm")]: {
        display: "flex",
        background: "#FFF1D8",
        height: 238,
        width: "100%",
        marginTop: 100,
        background: "url(/img/Group455.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        position: "relative",
    },
}));

const MyButton = styled(Button)(({ theme }) => ({
    position: "absolute",
    background: "white",
    color: "#3E3E3E",
    boxShadow: " 0px 4px 26px rgba(0, 0, 0, 0.25)",
    width: 255,
    height: 75,
    left: "50%",
    transform: "translate(-50%, -50%)",
    top: 237,
    [theme.breakpoints.down("sm")]: {
        width: 141,
        height: 44,
    },
}));

const ThreeScreen = () => {
    const navigate = useNavigate();

    const data = [
        {
            bgimg: "Group2453.png",
            text: "Объёмное оперативное вмешательство, осуществляемое с целью восстановления эстетических пропорций живота.",
            title: "Абдоминопластика",
            link: ROUTES.Abdominoplasty,
        },
        {
            bgimg: "Group2454.png",
            text: "Современные импланты груди, изготовленные из биологически нейтральной многослойной оболочки и гелевого наполнителя, не вредят здоровью женщины. ",
            title: "Маммопластика",
            link: ROUTES.Mammoplasty,
        },
        {
            bgimg: "Group2455.png",
            text: "Простой и эффективный метод удаления подкожного жира в различных зонах тела и лица. Таким образом, можно устранить недостатки фигуры, сделав ее стройнее и гармоничнее. ",
            title: "Липосакция",
            link: ROUTES.Liposuction,
        },
        {
            bgimg: "Group2456.png",
            text: "Операция по изменению формы век, разреза глаз. Данный вид оперативного вмешательства предполагает иссечение избытков кожного покрова и жировых образований.",
            title: "Блефаропластика",
            link: ROUTES.Blepharoplasty,
        },
        {
            bgimg: "Group2457.png",
            text: "Моделирование твёрдого тела отличается от близких областей, геометрического моделирования и компьютерной графики упором на физическую точность. Сначала врач забирает жир там, где его быть не должно: со спины, внутренней и внешней поверхности бедра, живота и боков. ",
            title: "Моделирование тела",
            link: ROUTES.BodyModeling,
            type: "right",
        },
        {
            bgimg: "Group2458.png",
            text: "Операция по исправлению эстетических недостатков ушей. Одна из самых распространенных пластических процедур в мире. Выполняется для пациентов, недовольных видом своих ушей. Причинами могут быть врожденные дефекты, последствия травмы или пирсинга.",
            title: "Отопластика",
            link: ROUTES.Otoplasty,
            type: "left",
        },
        {
            bgimg: "Group24575.png",
            text: "Интимная контурная пластика - это метод, позволяющий восполнить объем мягких тканей путем введения препаратов с гиалуроновой кислотой. С помощью интимного филлинга устраняются эстетические, функциональные недостатки, связанные с возрастными изменениями или индивидуальными особенностями организма.",
            title: "Интимная пластика",
            link: ROUTES.IntimatePlastic,
            type: "left",
        },
        {
            bgimg: "Group24585.png",
            text: "Косметология - эта наука и  современная область медицины на стыке двух наук: дерматологии (науки о коже) и физиотерапии (науке о воздействии природных и иных факторов на человеческий организм).  Если говорить об истории, то как отрасль медицины  косметология появилась очень давно, ещё во времена Древнего Египта. Именно в Африке и появились первые средства по уходу за кожей и окрашиванию волос.",
            title: "Косметология",
            link: ROUTES.Cosmetology,
            type: "left",
        },
    ];
    return (
        <>
            <Container>
                <Text
                    sx={{ fontSize: 48, textAlign: "center", mt: 6 }}
                    md={30}
                    sm={24}
                >
                    Услуги пластической
                    <br /> хирургии
                </Text>
                <Root>
                    {data.map((item, index) => (
                        <ServicesCard
                            key={index}
                            text={item.text}
                            title={item.title}
                            link={item.link}
                            bgimg={item.bgimg}
                            type={item.type}
                        />
                    ))}
                </Root>
                <RinoplasticCard />
            </Container>
            <MobileBox>
                <Grid container>
                    <Grid
                        item
                        xs={7}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            pl: 2,
                        }}
                    >
                        <Text sx={{ fontSize: 14 }}>Ринопластика</Text>
                        <Text sx={{ fontSize: 9 }}>
                            Нос человека выполняет не только дыхательную, но и
                            определенную эстетическую функцию. Именно на нем,
                            как на наиболее выступающей части лица,
                            преимущественно концентрируется внимание окружающих.
                            Неправильная форма носа может испортить даже
                            привлекательную в остальном внешность. В таких
                            случаях на помощь приходит пластическая хирургия.
                            Операция, предназначенная для придания носу
                            необходимой формы и размера, называется
                            ринопластика.
                        </Text>
                    </Grid>
                </Grid>
                <MyButton onClick={() => navigate(ROUTES.RHINOPLASTY)}>
                    <Text sx={{ fontSize: 20, fontFamily: "Manrope" }} sm={12}>
                        Подробнее
                    </Text>
                </MyButton>
            </MobileBox>
        </>
    );
};

export default ThreeScreen;
