import React from "react";
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/system";

import { Container, Text } from "../../../components";

const Root = styled(Container)(({ theme }) => ({
    marginTop: 110,
    [theme.breakpoints.down("sm")]: {
        marginTop: 60,
    },
}));

const SecondScreen = () => {
    return (
        <Root>
            <Text sx={{ fontSize: 40, textAlign: "center" }} sm={24}>
                Описание услуги
            </Text>
            <Text
                sx={{
                    fontSize: 24,
                    fontWeight: 500,
                    mt: 8,
                    fontFamily: "Manrope",
                }}
                sm={16}
            >
                Интимная пластика — это раздел медицины, который помогает
                женщине надолго сохранять гинекологическое здоровье, молодость в
                интимной зоне и радость от сексуальной жизни. Теперь женщина
                может чувствовать себя уверенно и сексуально в любом возрасте,
                даже после трудных родов и травм.
            </Text>
        </Root>
    );
};

export default SecondScreen;
