import React from "react";
import { Outlet, useParams, useLocation } from "react-router-dom";

import { Header, Footer } from "../components";

const Layout = () => {
    return (
        <div style={{ backgroundColor: "#F7F7F7" }}>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;
