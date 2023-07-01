import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { FC } from "react";
import { Layout } from "../Layout";
import { HomePage } from "../pages/HomePage";
import { ProductsPage } from "../pages/ProductsPage";

export const RouterPaths: FC = () => {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />} >
                        <Route index element={<HomePage />} />
                        <Route path="products" element={<ProductsPage />}>
                            <Route path=":productId" />
                        </Route>
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