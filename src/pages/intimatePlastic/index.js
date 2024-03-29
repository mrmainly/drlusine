import React, { useEffect } from "react";

import { Box } from "@mui/material";

import StartScreen from "./components/StartScreen";
import SecondScreen from "./components/SecondScreen";
import { ThreeScreen, ResultsSlider, Text } from "../../components";

const IntimatePlastic = () => {
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
      label: "Лабиопластика",
      value: "от 70 тыс. руб",
    },
    {
      label: "Вагинопластика",
      value: "от 110 тыс. руб",
    },
    {
      label: "Гименопоастика",
      value: "от 45 тыс. руб",
    },
  ];

  const resultsData = [
    { img: "IMG_3864" },
    { img: "IMG_3940" },
    { img: "IMG_4226" },
    { img: "IMG_4225" },
    { img: "IMG_4224" },
    { img: "IMG_4223" },
  ];

  return (
    <Box>
      <StartScreen />
      <SecondScreen />
      <ThreeScreen
        img="/img/60891a41034701.png"
        title="Услуги и цены"
        data={data}
      />
      <Box sx={{ mt: 7 }}>
        <Text sx={{ fontSize: 42, textAlign: "center", mb: "-30px" }}>
          Результаты
        </Text>
        <ResultsSlider data={resultsData} height={1000} heightSm={300} />
      </Box>
    </Box>
  );
};

export default IntimatePlastic;
