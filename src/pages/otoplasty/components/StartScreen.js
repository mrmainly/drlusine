import React from "react";
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/system";

import { Container, Text } from "../../../components";

const Root = styled(Container)(({ theme }) => ({
    backgroundColor: "#FFF1CC",
    marginTop: "-350px",
    display: "flex",
    alignItems: "end",
    [theme.breakpoints.down("sm")]: {
        marginTop: "-410px",
    },
}));

const Img = styled("img")(({ theme }) => ({
    zIndex: 2,
    position: "relative",
    [theme.breakpoints.down("xl")]: {
        width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
        width: 224,
        margin: "0 auto",
    },
}));

const GridText = styled(Grid)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
        display: "none",
    },
}));

const BoxMobile = styled(Container)(({ theme }) => ({
    display: "none",
    [theme.breakpoints.down("md")]: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        marginTop: 30,
    },
}));

const StartScreen = () => {
    return (
        <>
            <Root wrapper={true} minHeight={475}>
                <Grid
                    container
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <GridText item xl={7} lg={7} md={7} sm={7}>
                        <Box sx={{ mt: 13 }}>
                            <Text sx={{ fontSize: 60 }} lg={50}>
                                Отопластика
                            </Text>
                            <Text sx={{ fontSize: 32 }} lg={25}>
                                Улучшение формы и размера ушных раковин,
                                устранение их деформации и асимметрии.
                            </Text>
                        </Box>
                    </GridText>
                    <Grid
                        item
                        xl={5}
                        lg={5}
                        md={5}
                        sm={6}
                        xs={12}
                        sx={{ display: "flex", justifyContent: "center" }}
                    >
                        <Img src="/img/image158.png" />
                    </Grid>
                </Grid>
            </Root>
            <BoxMobile>
                <Text sx={{ fontSize: 28 }}>Отопластика</Text>
                <Text sx={{ fontSize: 24, mt: 1 }}>
                    Лицо всегда является “визитной карточкой”
                </Text>
            </BoxMobile>
        </>
    );
};

export default StartScreen;
