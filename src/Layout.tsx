import { Outlet } from "react-router-dom";
import { Footer, Header } from "./components";
import './css/layout.css';
import { FC } from "react";
import { ProductsProvider } from "./context/ProductsProvider";


export const Layout: FC = () => {
    return (
        <>
            <ProductsProvider>
                <Header />
                <main className="main">
                    <Outlet />
                </main>
            </ProductsProvider>
            <Footer />
        </>
    )
}
