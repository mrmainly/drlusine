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
                Пластика век (блефаропластика) позволяет удалить избыток кожи,
                жировой клетчатки век и «мешки» под глазами. Существует пластика
                как верхнего, так и нижнего века. Операция позволяет устранить
                провисающую кожу и выступающую подкожную жировую клетчатку, так
                называемые малярные мешки, которые придают лицу усталый,
                изможденный вид (особенно это касается пластики нижних век).
                Длительность операции составляет около 40 минут.
            </Text>
        </Root>
    );
};

export default SecondScreen;
