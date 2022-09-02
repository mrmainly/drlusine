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
      text: "Маммопластика Операция, направленная на коррекцию формы, положения, объема молочных желез",
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
      text: "Липомоделирование – уникальный метод создания идеального силуэта тела за одну операцию. Благодаря этой операции Вы получите тело мечты без изнурительных диет и спорта.",
      title: "Моделирование тела",
      link: ROUTES.BodyModeling,
      type: "right",
      typeText: "minimal-text",
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
      text: "Помогаем женщине надолго сохранить гинекологическое здоровье",
      title: "Интимная пластика",
      link: ROUTES.IntimatePlastic,
      type: "left",
      typeText: "minimal-text",
    },
    {
      bgimg: "Group24585.png",
      text: "Косметология - долговременная профилактика, которая заключается в полной или частичной трансформации внешности человека без хирургического вмешательства.",
      title: "Косметология",
      link: ROUTES.Cosmetology,
      type: "left",
      typeText: "minimal-text",
    },
  ];
  return (
    <>
      <Container>
        <Text sx={{ fontSize: 48, textAlign: "center", mt: 6 }} md={30} sm={24}>
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
              typeText={item.typeText}
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
              Нос человека выполняет не только дыхательную, но и определенную
              эстетическую функцию. Именно на нем, как на наиболее выступающей
              части лица, преимущественно концентрируется внимание окружающих.
              Неправильная форма носа может испортить даже привлекательную в
              остальном внешность. В таких случаях на помощь приходит
              пластическая хирургия. Данная операция назначена не только на
              устранения внешних эстетических дефектов, но и для улучшения
              дыхания.
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
