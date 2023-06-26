import { Outlet } from "react-router-dom";
import { Footer, Header } from "./components";
import './css/layout.css';


export const Layout = () => {
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
