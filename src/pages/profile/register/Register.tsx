import "./register.css";

export const Register = () => {
    return (
        <>
            <form className="form-container form-container-register">
                <div className="form-entry-container">
                    <label className="form-entry-label">Name</label>
                    <input type="text" id="name-input" name="name-input"
                        className="form-input"
                        placeholder="enter name"
                    />
                    <p></p>
                </div>
                <div className="form-entry-container">
                    <label className="form-entry-label">Email</label>
                    <input type="email" id="email-input" name="email-input"
                        className="form-input"
                        placeholder="enter email"
                    />
                    <p></p>
                </div>
                <div className="form-entry-container">
                    <label className="form-entry-label">password</label>
                    <input type="password" id="password-input" name="password-input"
                        className="form-input"
                        placeholder="enter password"
                    />
                    <p></p>
                </div>
                <button className="login-btn">Register</button>
            </form>
        </>
    )
}
