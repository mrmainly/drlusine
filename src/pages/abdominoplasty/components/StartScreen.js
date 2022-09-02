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
}));

const GridText = styled(Grid)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  paddingTop: 140,
  [theme.breakpoints.down("xl")]: {
    paddingTop: 100,
  },
  [theme.breakpoints.down("lg")]: {
    paddingTop: 80,
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

const StartScreen = ({ title, text, img }) => {
  return (
    <>
      <Root wrapper={true} minHeight={475}>
        <Grid container sx={{ mb: "-4px" }}>
          <GridText item xl={7} lg={7} md={7} sm={7}>
            <Box>
              <Text sx={{ fontSize: 48 }} lg={40}>
                {title}
              </Text>
              <Text sx={{ fontSize: 18 }} lg={16}>
                Абдоминопластика (пластика живота)
                <br /> – это операция по удалению излишков кожи. Эта операция
                позволяющая добиться:
                <br /> - Укрепления мышечного каркаса брюшной стенки;
                <br /> -Устранения так называемого кожно-жирового «фартука»;
                <br /> -Улучшения и подтяжки состояния кожи; Устранения
                дряблость кожи, растяжек (стрий), грыж.
              </Text>
            </Box>
          </GridText>
          <Grid item xl={5} lg={5} md={5} sm={12} xs={12}>
            <Img src={img} />
          </Grid>
        </Grid>
      </Root>
      <BoxMobile>
        <Text sx={{ fontSize: 28 }}>{title}</Text>
        <Text sx={{ fontSize: 24, mt: 1 }}>
          {" "}
          Абдоминопластика (пластика живота)
          <br /> – это операция по удалению излишков кожи. Эта операция
          позволяющая добиться:
          <br /> - Укрепления мышечного каркаса брюшной стенки;
          <br /> -Устранения так называемого кожно-жирового «фартука»;
          <br /> -Улучшения и подтяжки состояния кожи; Устранения дряблость
          кожи, растяжек (стрий), грыж.
        </Text>
      </BoxMobile>
    </>
  );
};

export default StartScreen;
