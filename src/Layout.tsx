import { Outlet } from "react-router-dom";
import { Footer, Header } from "./components";
import './css/layout.css';
import { FC } from "react";
import { ProductsProvider } from "./context/ProductsProvider";
import { FilterProvider } from "./context/FilterProvider";
import { UserContextProvider } from "./context/UserContextProvider";
import { CartWishProvider } from "./context/CartWishProvider";


export const Layout: FC = () => {
    return (
        <>
            <UserContextProvider>
                <ProductsProvider>
                    <CartWishProvider>
                        <FilterProvider>
                            <Header />
                            <main className="main">
                                <Outlet />
                            </main>
                            <Footer />
                        </FilterProvider>
                    </CartWishProvider>
                </ProductsProvider>
            </UserContextProvider>
        </>
    )
}
