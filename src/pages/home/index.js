import React from "react";
import { Box, Button } from "@mui/material";

import StartBlog from "./components/StartScreen";
import SecondScreen from "./components/SecondScreen";
import ThreeScreen from "./components/ThreeScreen";
import ResultsScreen from "./components/ResultsScreen";
import FaqScreen from "./components/FaqScreen";
import FourScreen from "./components/FourScreen";
import FiveScreen from "./components/FiveScreen";

const Home = () => {
    return (
        <Box sx={{ overfolw: "hidden" }}>
            <StartBlog />
            <SecondScreen />
            <ThreeScreen />
            <FourScreen />
            <FiveScreen />
            <ResultsScreen />
            <FaqScreen />
        </Box>
    );
};

export default Home;
