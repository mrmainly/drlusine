import React from "react";
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/system";

import { Container, Text } from "../../../components";

const Root = styled(Container)(({ theme }) => ({
  backgroundColor: "#FFF1CC",
  marginTop: "-350px",
  zIndex: 0,
  display: "flex",
  alignItems: "end",
  [theme.breakpoints.down("sm")]: {
    marginTop: "-410px",
  },
}));

const Img = styled("img")(({ theme }) => ({
  [theme.breakpoints.down("xl")]: {
    width: "100%",
  },
  [theme.breakpoints.down("md")]: {
    width: 250,
  },
}));

const GridText = styled(Grid)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  paddingTop: 140,
  [theme.breakpoints.down("lg")]: {
    paddingTop: 200,
  },
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const BoxMobile = styled(Container)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("md")]: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    marginTop: 30,
  },
}));

const StartScreen = () => {
  return (
    <>
      <Root wrapper={true} minHeight={475}>
        <Grid container>
          <GridText item xl={7} lg={7} md={7} sm={7}>
            <Box>
              <Text sx={{ fontSize: 40 }} lg={35}>
                Моделирование тела
              </Text>
              <Text sx={{ fontSize: 18 }} lg={16}>
                Липомоделирование – методика коррекции фигуры, при которой
                восполняется дефицит объема там, где он необходим, за счет
                собственного жира пациента. Об этом так давно мечтали те, у кого
                зачастую локализуются жировые ловушки в нежелательных местах.
                Теперь, благодаря методике липомоделирования, можно менять
                расположение жира и моделировать фигуру без имплантатов,
                достигая отличных результатов коррекции.
              </Text>
            </Box>
          </GridText>
          <Grid
            item
            xl={5}
            lg={5}
            md={5}
            sm={12}
            xs={12}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Img src="/img/123455.png" />
          </Grid>
        </Grid>
      </Root>
      <BoxMobile>
        <Text sx={{ fontSize: 28 }}> Моделирование тела</Text>
        <Text sx={{ fontSize: 24, mt: 1 }}>
          Липомоделирование – методика коррекции фигуры, при которой
          восполняется дефицит объема там, где он необходим, за счет
          собственного жира пациента. Об этом так давно мечтали те, у кого
          зачастую локализуются жировые ловушки в нежелательных местах. Теперь,
          благодаря методике липомоделирования, можно менять расположение жира и
          моделировать фигуру без имплантатов, достигая отличных результатов
          коррекции.
        </Text>
      </BoxMobile>
    </>
  );
};

export default StartScreen;
