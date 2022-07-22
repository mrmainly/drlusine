import React from "react";

import { Button } from "@mui/material";
import { styled } from "@mui/system";

const CusButton = styled(Button)(({ theme }) => ({
    background:
        "radial-gradient(84.91% 84.91% at 50.14% 6.9%, rgba(255, 255, 255, 0.43) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(358.83deg, rgba(0, 0, 0, 0.07) 24.23%, rgba(0, 0, 0, 0) 132.68%), #FFE3B2;",
    boxShadow: "0px 4px 5px rgba(0, 0, 0, 0.25), 0px 4px 0px #DECDA3",
    color: "#3E3E3E",
    width: 320,
    height: 80,
    fontSize: 24,
    fontWeight: "500",
    [theme.breakpoints.down("sm")]: {
        width: 203,
        height: 50,
        fontSize: 14,
    },
    "&:hover": {
        color: "grey",
        backgroundColor: "#e6e9ed",
    },

    zIndex: 3,
}));

const MyButton = ({ children, ...props }) => (
    <CusButton {...props} type="submit" size="large" variant="contained">
        {children}
    </CusButton>
);

export default MyButton;
