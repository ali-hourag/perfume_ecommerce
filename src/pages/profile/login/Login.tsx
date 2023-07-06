
import { useNavigate } from "react-router-dom";
import { useUsersContext } from "../../../hooks/useUsers";
import "./login.css";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";

export const Login = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, reset, watch } = useForm({
        defaultValues: {
            email: "",
            password: ""
        }
    })

    const { currentUser, users, login, logout } = useUsersContext();

    const onSubmit = () => {
        let nonExisting = false;
        const userSearchedIndex = users.findIndex((user) => user.email === watch("email"))
        if (userSearchedIndex !== -1 && watch("email") !== "guest@guest.com") {
            if (users[userSearchedIndex].password === watch("password")) {
                login(users[userSearchedIndex]);
                localStorage.setItem("user", JSON.stringify(users[userSearchedIndex]));
                toast.success("Successfully logged!");
                setTimeout(() => {
                    reset();
                    navigate("/", {
                        replace: true,
                    });
                }, 2000)
            } else nonExisting = true;
        } else nonExisting = true;

        if (nonExisting) {
            reset();
            toast.error("This user does not exist.");
        }
    }

    const handleLogOutClicked = () => {
        logout();
        localStorage.setItem("user", JSON.stringify(users[0]));
    }

    /**
     * CREAR EL CONTEXTO DE USUARIO
     * VER SI HAY UN USUARIO ENSEÑAR OTRA PÁGINA CON EL LOGOUT DISPONIBLE
     * SI NO HAY, THEN MOSTRAR EL FORMULARIO
     */
    return (
        <>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <form className={`form-container ${currentUser.email === "guest@guest.com" ? "" : "login-logout-display-none"}`} onSubmit={handleSubmit(onSubmit)}>
                <div className="form-entry-container">
                    <label className="form-entry-label">Email</label>
                    <input type="email" id="email-input"
                        className="form-input"
                        placeholder="enter email"
                        {...register("email", {
                            required: {
                                value: true,
                                message: "email required"
                            },
                            pattern: {
                                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                message: "invalid email."
                            }
                        })}
                    />
                    {errors.email && <p className="error-p">{errors.email.message}</p>}
                </div>
                <div className="form-entry-container">
                    <label className="form-entry-label">password</label>
                    <input type="password" id="password-input"
                        className="form-input"
                        placeholder="enter password"
                        {...register("password", {
                            required: {
                                value: true,
                                message: "password required"
                            },
                            pattern: {
                                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                                message: "invalid password"
                            }
                        })}
                    />
                    {errors.password && <p className="error-p">{errors.password.message}</p>}
                </div>
                <button type="submit" className="login-btn">LOG IN</button>
            </form>
            <div className={`logout-container ${currentUser.email === "guest@guest.com" ? "login-logout-display-none" : ""}`}>
                <h2>Hi {currentUser.name}!</h2>
                <p>Name: {currentUser.name}</p>
                <p>Email: {currentUser.email}</p>
                <button className="login-btn" onClick={handleLogOutClicked}>Log out</button>
            </div>
        </>
    )
}
