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
                Липомоделирование тела объединяет в себе две эстетические
                операции: липосакцию и липофилинг, и считается малотравматичной
                пластической операцией. Удаление лишнего жира проводится из
                проблемных участков тела с более толстыми слоями жира и
                трансплантируется в те места, где намечена коррекция. Жир
                удаляется из донорского участка, обычно с бедер, ягодиц или
                нижней части живота. В этих областях больше всего жировой ткани.
                Затем изъятый с помощью шприца или тонкой канюли жир очищают и
                вводят в область реципиента.
            </Text>
        </Root>
    );
};

export default SecondScreen;
