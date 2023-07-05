import { useForm } from "react-hook-form";
import "./register.css";

export const Register = () => {
    const { register, handleSubmit, formState: { errors }, reset, watch } = useForm({
        defaultValues: {
            name: "",
            email: "",
            password: "",
            passwordConfirmation: ""
        }
    })

    const onSubmit = () => {
        console.log("entro");
        reset();
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="form-container form-container-register">
                <div className="form-entry-container">
                    <label className="form-entry-label">Name</label>
                    <input type="text" id="name-input"
                        className="form-input"
                        placeholder="enter name"
                        {...register("name", {
                            required: {
                                value: true,
                                message: "name required"
                            },
                            pattern: {
                                value: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
                                message: "invalid name"
                            }
                        })}
                    />
                    {errors.name && <p>{errors.name.message}</p>}
                </div>
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
                                message: "invalid email"
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
                <div className="form-entry-container">
                    <label className="form-entry-label">confirm password</label>
                    <input type="password" id="password-confirmation-input"
                        className="form-input"
                        placeholder="enter password"
                        {...register("passwordConfirmation", {
                            required: {
                                value: true,
                                message: "password required"
                            },
                            pattern: {
                                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                                message: "invalid password"
                            },
                            validate: value => value === watch("password") || "passwords do not match"
                        })}
                    />
                    {errors.passwordConfirmation && <p className="error-p">{errors.passwordConfirmation.message}</p>}
                </div>
                <button type="submit" className="login-btn">Register</button>
            </form>
        </>
    )
}
