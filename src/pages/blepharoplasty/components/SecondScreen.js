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
                Данный вид оперативного вмешательства предполагает иссечение
                избытков кожного покрова и жировых образований. Показаниями к
                проведению блефаропластики являются: нависание кожи верхних и
                нижних век, «жировые мешки» век, опущение нижних уголков глаз,
                разрез и форма глаз. Излишки кожи и жира во время операции
                удаляются через разрезы в естественных складках глаз.
                Блефаропластика проводится в условиях стационара под общим
                обезболиванием. Продолжительность — от 2 до 3 часов. Период
                реабилитации не превышает 10—12 дней.
            </Text>
        </Root>
    );
};

export default SecondScreen;
