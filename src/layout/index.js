import React from "react";
import { Outlet } from "react-router-dom";

import { Header, Footer } from "../components";

const Layout = () => {
    return (
        <div style={{ backgroundColor: "#F7F7F7", overflow: "hidden" }}>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;
