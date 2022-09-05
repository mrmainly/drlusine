import React from "react";
import { styled } from "@mui/system";

import { Container, Text } from "..";

const Root = styled(Container)(({ theme }) => ({
    marginTop: 110,
    [theme.breakpoints.down("sm")]: {
        marginTop: 60,
    },
}));

const SecondScreen = ({ texts }) => {
    return (
        <Root>
            <Text sx={{ fontSize: 40, textAlign: "center", mb: 4 }} sm={24}>
                Описание услуги
            </Text>
            {texts.map((item, index) => (
                <Text
                    sx={{
                        fontSize: 24,
                        fontWeight: 500,
                        fontFamily: "Manrope",
                    }}
                    sm={18}
                    key={index}
                >
                    {item}
                </Text>
            ))}
        </Root>
    );
};

export default SecondScreen;
