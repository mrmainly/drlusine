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
                Это метод коррекции контуров тела путем забора и
                перераспределения жировых клеток из «проблемных зон». В ходе
                этой малотравматичной операции удается восполнить объем жировой
                клетчатки в тех участках тела, где наблюдается ее недостаток
                (например, грудь, ягодицы), а также воссоздать атлетический
                мышечный рельеф — подчеркнуть талию, кубики пресса, косые мышцы
                живота и др.
            </Text>
        </Root>
    );
};

export default SecondScreen;
