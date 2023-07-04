import { Outlet } from "react-router-dom";
import { Footer, Header } from "./components";
import './css/layout.css';
import { FC } from "react";
import { ProductsProvider } from "./context/ProductsProvider";
import { FilterProvider } from "./context/FilterProvider";


export const Layout: FC = () => {
    return (
        <>
            <ProductsProvider>
                <FilterProvider>
                    <Header />
                    <main className="main">
                        <Outlet />
                    </main>
                </FilterProvider>
            </ProductsProvider>
            <Footer />
        </>
    )
}
