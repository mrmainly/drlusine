import React, { useEffect } from "react";

import { Box } from "@mui/material";

import StartScreen from "./components/StartScreen";
import SecondScreen from "./components/SecondScreen";
// import ThreeScreen from "./components/ThreeScreen";
import { ThreeScreen, ResultsSlider, Text } from "../../components";
import FourScreen from "./components/FourScreen";

const Liposuction = () => {
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
      label: "1 стадия",
      value: "150 тыс. руб",
    },
    {
      label: "2 стадия",
      value: "180 тыс. руб",
    },
    {
      label: "3 стадия",
      value: "210 тыс. руб",
    },
  ];

  const spina = [
    {
      label: "1 стадия",
      value: "110 тыс. руб",
    },
    {
      label: "2 стадия",
      value: "130 тыс. руб",
    },
    {
      label: "3 стадия",
      value: "150 тыс. руб",
    },
  ];

  const boka = [
    {
      label: "1 стадия",
      value: "115 тыс. руб",
    },
    {
      label: "2 стадия",
      value: "180 тыс. руб",
    },
    {
      label: "3 стадия",
      value: "210 тыс. руб",
    },
    {
      label: "Спортивные линии",
      value: "35 тыс. руб",
    },
    {
      label: "Липоксация рук",
      value: "120 тыс. руб",
    },
    {
      label: "Липосакция коленей",
      value: "100 тыс. руб",
    },
  ];

  const faceData = [
    {
      label: "1 стадия",
      value: "90 тыс. руб",
    },
    {
      label: "2 стадия",
      value: "100 тыс. руб",
    },
    {
      label: "3 стадия",
      value: "110 тыс. руб",
    },
  ];

  const bedra = [
    {
      label: "1 стадия",
      value: "100 тыс. руб",
    },
    {
      label: "2 стадия",
      value: "110 тыс. руб",
    },
    {
      label: "3 стадия",
      value: "130 тыс. руб",
    },
  ];

  const resultsData = [
    { img: "IMG_3925" },
    { img: "IMG_3982" },
    { img: "IMG_4015" },
    { img: "IMG_4256" },

    { img: "IMG_3949", text: "Липосакция живота и боков" },
    { img: "IMG_3581", text: "Липосакция живота и боков" },

    { img: "IMG_4024", text: "Липосакция подбородка" },
    { img: "IMG_3950", text: "Липосакция подбородка" },

    { img: "IMG_3956", text: "Липосакция и липофилинг" },
    { img: "IMG_4027", text: "Липосакция и липофилинг" },

    {
      img: "IMG_4031",
      text: " Липосакция живота, боков и спины, спортивные линии пресса",
    },
  ];

  return (
    <Box>
      <StartScreen />
      <SecondScreen />
      <ThreeScreen
        data={data}
        img={"/img/Rectangle234234.png"}
        title="Липоксация живота"
      />
      <ThreeScreen
        data={spina}
        img={"/img/spina.png"}
        title="Липоксация спины"
        type="delete"
      />
      <ThreeScreen
        data={boka}
        img={"/img/bedr.png"}
        title="Липоксация боков"
        type="delete"
      />
      <ThreeScreen
        data={faceData}
        img={"/img/facelipo.png"}
        title="Липоксация подбородка и овала лица"
        type="delete"
      />
      <ThreeScreen
        data={bedra}
        img={"/img/bedratrue.png"}
        title="Липоксация бёдер"
        type="delete"
      />
      <FourScreen />
      <Box sx={{ mt: 7 }}>
        <Text sx={{ fontSize: 42, textAlign: "center", mb: "-30px" }}>
          Результаты
        </Text>
        <ResultsSlider data={resultsData} height={800} heightSm={300} />
      </Box>
    </Box>
  );
};

export default Liposuction;
