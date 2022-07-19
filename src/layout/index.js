import React, { useEffect } from "react";
import { Outlet, useParams, useLocation, useNavigate } from "react-router-dom";

import { Header, Footer } from "../components";
import ROUTES from "../routes";

const Layout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate(ROUTES.HOME);
    }, [window.location.reload]);

    return (
        <div style={{ backgroundColor: "#F7F7F7" }}>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;
