import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { FC } from "react";
import { Layout } from "../Layout";
import { HomePage } from "../pages/homePage/HomePage";
import { ProductsPage } from "../pages/productsPage/ProductsPage";
import { ProductSelected } from "../pages/productSelected/ProductSelected";
import { Profile } from "../pages/profile/Profile";
import { Login } from "../pages/profile/login/Login";
import { Register } from "../pages/profile/register/Register";
import { Cart } from "../pages/cart/Cart";
import { Wishlist } from "../pages/wishlist/Wishlist";

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
                        <Route path="cart" element={<Cart />} />
                        <Route path="wishlist" element={<Wishlist />} />
                        <Route path="*" element={<Navigate replace to="/" />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};