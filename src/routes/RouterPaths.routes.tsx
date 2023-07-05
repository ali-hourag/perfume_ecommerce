import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { FC } from "react";
import { Layout } from "../Layout";
import { HomePage } from "../pages/homePage/HomePage";
import { ProductsPage } from "../pages/productsPage/ProductsPage";
import { ProductSelected } from "../pages/productSelected/ProductSelected";
import { Profile } from "../pages/profile/Profile";
import { Login } from "../pages/profile/login/login";
import { Register } from "../pages/profile/register/Register";

export const RouterPaths: FC = () => {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />} >
                        <Route index element={<HomePage />} />
                        <Route path="products" element={<ProductsPage />} />
                        <Route path="products/:productId" element={<ProductSelected />} />
                        <Route path="profile" element={<Profile />}>
                            <Route index element={<Login />} />
                            <Route path="register" element={<Register />} />
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