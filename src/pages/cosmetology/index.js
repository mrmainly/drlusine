import React, { useEffect } from "react";

import { Box } from "@mui/material";

import StartScreen from "./components/StartScreen";
import SecondScreen from "./components/SecondScreen";
import { ThreeScreen, ResultsSlider, Text } from "../../components";

const Cosmetology = () => {
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
      label: "Коррекция носа",
      value: "от 28 тыс. руб",
    },
    {
      label: "Увеличение губ",
      value: "от 22 тыс. руб",
    },
    {
      label: "Кольца Венеры",
      value: "от 20 тыс. руб",
    },
    {
      label: "Коррекция носокубной борозды",
      value: "от 20 тыс. руб",
    },
    {
      label: "Увеличение глаз ботексом",
      value: "от 12 тыс. руб",
    },
    {
      label: "Коллекция носослезной бороды",
      value: "от 22 тыс. руб",
    },
  ];

  const resultsData = [
    "IMG_5592",
    "IMG_77542",
    "IMG_7956",
    "IMG_4009",
    "image170",
    "IMG_4236",
    "IMG_4242",
    "IMG_4235",
  ];

  return (
    <Box>
      <StartScreen />
      <SecondScreen />
      <ThreeScreen
        img="/img/plastic-face.png"
        title="Косметология"
        data={data}
      />
      <Box sx={{ mt: 7 }}>
        <Text sx={{ fontSize: 42, textAlign: "center", mb: "-30px" }}>
          Результаты
        </Text>
        <ResultsSlider data={resultsData} height={800} heightSm={300} />
      </Box>
      {/* <Box sx={{ mt: 7 }}>
                <Text sx={{ fontSize: 42, textAlign: "center", mb: "-30px" }}>
                    Результаты
                </Text>
                <ResultsSlider data={resultsData} height={800} heightSm={300} />
            </Box> */}
    </Box>
  );
};

export default Cosmetology;
