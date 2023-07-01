import { Outlet } from "react-router-dom";
import { Footer, Header } from "./components";
import './css/layout.css';
import { FC } from "react";


export const Layout: FC = () => {
    return (
        <>
            <Header />
            <main className="main">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
