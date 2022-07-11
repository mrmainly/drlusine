import React from "react";
import { Box } from "@mui/material";

import StartBlog from "./components/StartScreen";
import SecondScreen from "./components/SecondScreen";
import ThreeScreen from "./components/ThreeScreen";
import ResultsScreen from "./components/ResultsScreen";
import FaqScreen from "./components/FaqScreen";

const Home = () => {
    return (
        <Box>
            <StartBlog />
            <SecondScreen />
            <ThreeScreen />
            <ResultsScreen />
            <FaqScreen />
        </Box>
    );
};

export default Home;
