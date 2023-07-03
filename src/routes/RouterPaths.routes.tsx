import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { FC } from "react";
import { Layout } from "../Layout";
import { HomePage } from "../pages/homePage/HomePage";
import { ProductsPage } from "../pages/productsPage/ProductsPage";

export const RouterPaths: FC = () => {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />} >
                        <Route index element={<HomePage />} />
                        <Route path="products" element={<ProductsPage />} />
                        <Route path="products/:productId" />
                        <Route path="profile">
                            <Route path="login" />
                            <Route path="register" />
                        </Route>
                        <Route path="cart" />
                        <Route path="wishlist" />
                        <Route path="*" element={<Navigate replace to="/" />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};