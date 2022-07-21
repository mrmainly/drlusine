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
                Косметолог занимается вашей красотой нехирургическим способом, в
                то время как пластический хирург исправляет или восстанавливает
                проблемную зону человеческого тела с помощью хирургического
                вмешательства.Медицинская косметология занимается в основном
                уходом за кожей и помогает бороться с проблемами, как правило,
                требующими медицинской экспертизы. Более продвинутые
                косметологические процедуры, в частности ботокс, филлеры,
                лазерные аппаратные процедуры или химический срединный и
                глубокий пиллинг, проводятся исключительно врачами
                косметологами.
            </Text>
        </Root>
    );
};

export default SecondScreen;
