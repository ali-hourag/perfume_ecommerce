

import { useUsersContext } from "../../hooks/useUsers";
import "./profile.css";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

export const Profile = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { currentUser } = useUsersContext();


    const handleBackBtn = () => {
        const previousPath = localStorage.getItem("previous-page");
        if (previousPath) navigate(previousPath);
    }

    const handleLoginMessageClicked = () => {
        location.pathname.includes("register") ? navigate("/profile") : navigate("register");
    }

    /**
     * Message to go to register page is only displayed when no user is logged in!!!
     */


    return (
        <section className="profile-container">
            <img src="https://res.cloudinary.com/dqdysl9ep/image/upload/v1697745286/perfume_ecommerce/sunnah-musk_rj1kim.avif" />
            <section className="login-register-container">
                <Outlet />
            </section>
            <p className={`login-message_text ${currentUser.email === "guest@guest.com" ? "" : "login-message-display_none"}`} onClick={handleLoginMessageClicked}>{!location.pathname.includes("register") ?
                "you don't have an accout? register here" : "you already have an account? log in here"}</p>
            <button className="profile-back-btn" onClick={handleBackBtn}>Go back</button>
        </section>
    )
}
