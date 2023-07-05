import "./login.css";
import { useForm } from "react-hook-form";

export const Login = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: {
            email: "",
            password: ""
        }
    })

    const onSubmit = () => {
        console.log("entro");

        reset();
    }

    /**
     * CREAR EL CONTEXTO DE USUARIO
     * VER SI HAY UN USUARIO ENSEÑAR OTRA PÁGINA CON EL LOGOUT DISPONIBLE
     * SI NO HAY, THEN MOSTRAR EL FORMULARIO
     */
    return (
        <>
            <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
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
            <div className="logout-container login-logout-display-none">
                <h2>Hi User!</h2>
                <p>Name: user</p>
                <p>Email: user@gmail.com</p>
                <button className="login-btn">Log out</button>
            </div>
        </>
    )
}
