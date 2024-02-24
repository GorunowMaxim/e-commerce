import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { lazy } from "react";

import MainLayout from "pages/layouts/mainLayout/MainLayout";

const Home = lazy(() => import("pages/home/Home"));
const Women = lazy(() => import("pages/ProductsPages/women/Women"));
const Men = lazy(() => import("pages/ProductsPages/men/Men"));
const About = lazy(() => import("pages/about/About"));
const ProductProfilePage = lazy(
    () => import("pages/productProfilePage/ProductProfilePage")
);
const SearchResultPage = lazy(
    () => import("pages/ProductsPages/searchResult/SearchResultPage")
);
const Sale = lazy(() => import("pages/sale/Sale"));

import "app/styles/index.scss";

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

function Router() {
    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="women" element={<Women />} />
                    <Route path="men" element={<Men />} />
                    <Route path="sale" element={<Sale />} />
                    <Route
                        path="product/:id"
                        element={<ProductProfilePage />}
                    />
                    <Route
                        path="women/product/:id"
                        element={<ProductProfilePage />}
                    />
                    <Route
                        path="men/product/:id"
                        element={<ProductProfilePage />}
                    />
                    <Route
                        path="search-result"
                        element={<SearchResultPage />}
                    />
                    <Route path="about" element={<About />} />
                </Route>
            </Routes>
        </>
    );
}

export default Router;
