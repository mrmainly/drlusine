import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Layout from "./layout";
import {
    Home,
    Rhinoplasty,
    Results,
    Otoplasty,
    Mammoplasty,
    Liposuction,
    Documents,
    Contacts,
    BodyModeling,
    Abdominoplasty,
    AboutMyself,
    Blepharoplasty,
    Faq,
} from "./pages";
import ROUTES from "./routes";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={ROUTES.HOME} element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route
                        path={ROUTES.Rhinoplasty}
                        element={<Rhinoplasty />}
                    />
                    <Route path={ROUTES.Results} element={<Results />} />
                    <Route path={ROUTES.Faq} element={<Faq />} />
                    <Route
                        path={ROUTES.Abdominoplasty}
                        element={<Abdominoplasty />}
                    />
                    <Route
                        path={ROUTES.AboutMyself}
                        element={<AboutMyself />}
                    />
                    <Route
                        path={ROUTES.Blepharoplasty}
                        element={<Blepharoplasty />}
                    />
                    <Route
                        path={ROUTES.BodyModeling}
                        element={<BodyModeling />}
                    />
                    <Route path={ROUTES.Contacts} element={<Contacts />} />
                    <Route path={ROUTES.Documents} element={<Documents />} />
                    <Route path={ROUTES.Otoplasty} element={<Otoplasty />} />
                    <Route
                        path={ROUTES.Liposuction}
                        element={<Liposuction />}
                    />
                    <Route
                        path={ROUTES.Mammoplasty}
                        element={<Mammoplasty />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
