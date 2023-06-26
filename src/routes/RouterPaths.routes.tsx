import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { FC } from "react";
import { Layout } from "../Layout";
import { HomePage } from "../pages/HomePage";

export const RouterPaths: FC = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />} >
                        <Route index element={<HomePage />} />
                        <Route path="/products" >
                            <Route path=":productId" />
                        </Route>
                        <Route path="/cart" />
                        <Route path="/login" />
                        <Route path="/register" />
                        <Route path="*" element={<Navigate replace to="/" />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};