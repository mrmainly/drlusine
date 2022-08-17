import React from "react";

import { Box, Grid } from "@mui/material";
import { styled } from "@mui/system";

import { Text, Container } from "../../components";

const MyGrid = styled(Grid)(({ theme }) => ({
  marginTop: 82,
  [theme.breakpoints.down("sm")]: {
    marginTop: 20,
  },
}));

const TextBox = styled(Box)(({ theme }) => ({
  marginTop: 44,
  [theme.breakpoints.down("md")]: {
    marginTop: 15,
    width: "80%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

const MyText = styled(Text)(({ theme }) => ({
  marginLeft: 19,
  fontSize: 24,
  fontFamily: "Manrope",
  marginTop: 30,
  [theme.breakpoints.down("sm")]: {
    marginTop: 20,
  },
}));

const MyText2 = styled(Text)(({ theme }) => ({
  fontSize: 24,
  fontFamily: "Manrope",
  marginTop: 99,
  [theme.breakpoints.down("sm")]: {
    marginTop: 20,
  },
}));

const GridImg = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const Title = styled(Text)(({ theme }) => ({
  fontSize: 32,
  fontWeight: 600,

  [theme.breakpoints.down("md")]: {
    textAlign: "center",
  },
}));

const Box1 = styled(Grid)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginTop: 44,
  [theme.breakpoints.down("md")]: {
    marginTop: 20,
  },
}));

const Img = styled("img")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

const AboutMyself = () => {
  return (
    <Container sx={{ mt: "-140px" }}>
      <Box sx={{ textAlign: "center" }}>
        <Text sx={{ fontSize: 40 }} md={30} sm={20}>
          Немного о себе
        </Text>
        <Text sx={{ fontSize: 60 }} md={40} sm={25}>
          Лусине Майтесян
        </Text>
        <Text sx={{ fontSize: 24, mt: 2 }} sm={16}>
          Майтесян Лусине -косметолог, Врач общий хирург, пластический хирург,
          дерматовенеролог, косметолог, специалист по лазерным технологиям и
          вдобавок практикующий хирург! Всесторонне развитый специалист, который
          знает не только методы и способы лечения, но и основы и базовые
          единицы нашего организма! Ее взгляд и подход в любом медицинском
          вмешательстве широк и охватывает всевозможные субъединицы тела
          человека: начиная от клеточного взаимодействия, заканчивая строением и
          биомеханикой мышц! Косметология - это не просто эстетика и красота
          внешнего вида, в первую очередь - это здоровье всего организма,
          воссоздание баланса всех структур, а только потом прекрасный облик.
        </Text>
      </Box>
      <MyGrid container spacing={2}>
        <GridImg item lg={6} xl={6} md={6} sm={12} xs={12}>
          <Img src={"/img/babushka.png"} />
        </GridImg>
        <GridImg item lg={6} xl={6} md={6} sm={12} xs={12}>
          <TextBox>
            <Title md={25} sm={20}>
              ЛИЦО ВСЕГДА ЯВЛЯЕТСЯ "ВИЗИТНОЙ КАРТОЧКОЙ"{" "}
            </Title>
            <Box1>
              <img src="/img/stars.png" />
              <MyText md={20} sm={16}>
                Преподаватель международного уровня по косметологии
              </MyText>
            </Box1>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <img src="/img/stars.png" />
              <MyText md={20} sm={16}>
                Врач-дерматовенеролог косметолог
              </MyText>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <img src="/img/stars.png" />
              <MyText md={20} sm={16}>
                Имеет членство <span style={{ fontWeight: 600 }}>АSLMSG</span>
              </MyText>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <img src="/img/stars.png" />
              <MyText md={20} sm={16}>
                Долгий путь обучения, который не прекращается и по сей день,а
                также ежедневная практика-это залог моего успеха!
              </MyText>
            </Box>
          </TextBox>
        </GridImg>
      </MyGrid>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          mt: 10,
        }}
      >
        <Text sx={{ fontSize: 40, textAlign: "center" }} md={30} sm={25}>
          Почему я выбрала эту
          <br /> специальность?
        </Text>
        <MyText2 md={20} sm={16}>
          Путь выбора узкой специализации всегда даётся с трудом большинству
          молодых специалистов! Тут очень важен характер человека и ни менее
          важно его мировоззрение! Желание видеть повсюду красоту и эстетику
          -вот что стало решающим фактором при выборе направления!
        </MyText2>
        <Text
          sx={{
            fontSize: 24,
            fontFamily: "Manrope",
            mt: 1,
          }}
          md={20}
          sm={16}
        >
          Но не стоит за бывать, что красота не возможна без здоровья!
          Пластическая хирургия совмещает все эти составляющие воедино и дарит
          людям возможность добиться своего идеала во всех жизненных
          направлениях, так как корректирует не только тело, но и душу!
        </Text>
      </Box>
    </Container>
  );
};

export default AboutMyself;
