import { useState } from "react";
import "./Authentication.css";

function Authentication() {
    const [isPopup, setIsPopup] = useState(false);
    const [isRegister, setIsRegister] = useState(false);

    return (
        <>
            {/* Header */}
            <header>
                <h1 className="logo">T I M E L E S S</h1>
                <nav className="navigation">
                    <button
                        type="button"
                        className="btnlogin"
                        onClick={() => setIsPopup(true)}
                    >
                        LOGIN
                    </button>
                </nav>
            </header>
            <div
                className={`wrapper ${isPopup ? "active-popup" : ""} ${isRegister ? "active" : ""
                    }`}
            >
                <span className="icon-close" onClick={() => setIsPopup(false)}>
                    X
                </span>

                {/* Login Form */}
                <div className="form-box login" id="loginForm">
                    <h2>LOGIN</h2>
                    <form method="post" action="/login" name="loginForm">
                        <div className="input-box">
                            <span className="icon">
                                <ion-icon name="paw-outline"></ion-icon>
                            </span>
                            <input type="text" id="Email" name="Email" required />
                            <label>Email</label>
                        </div>

                        <div className="input-box">
                            <span className="icon">
                                <ion-icon name="heart-half-outline"></ion-icon>
                            </span>
                            <input type="password" id="password" name="password" required />
                            <label>Password</label>
                        </div>

                        <button className="btn" type="submit">
                            Calculate
                        </button>

                        <div className="register">
                            <p>
                                Don’t have an account?{" "}
                                <a
                                    href="#"
                                    className="register-link"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setIsRegister(true);
                                    }}
                                >
                                    Register Now!
                                </a>
                            </p>
                        </div>
                    </form>
                </div>

                {/* Register Form */}
                <div className="form-box register" id="registerationForm">
                    <h2>Register</h2>
                    <form method="post" action="/register" name="registerationForm">
                        <div className="input-box">
                            <span className="icon">
                                <ion-icon name="headset-outline"></ion-icon>
                            </span>
                            <input type="text" name="fname" id="fname" required />
                            <label>Full Name</label>
                        </div>

                        <div className="input-box">
                            <span className="icon">
                                <ion-icon name="sparkles-outline"></ion-icon>
                            </span>
                            <input type="text" name="address" id="address" required />
                            <label>Address</label>
                        </div>

                        <div className="input-box">
                            <span className="icon">
                                <ion-icon name="paw-outline"></ion-icon>
                            </span>
                            <input type="text" name="Email" id="Email" required />
                            <label>Email</label>
                        </div>

                        <div className="input-box">
                            <span className="icon">
                                <ion-icon name="heart-half-outline"></ion-icon>
                            </span>
                            <input type="password" name="Password" id="Password" required />
                            <label>Password</label>
                        </div>

                        <button className="btn" type="submit">
                            Register
                        </button>

                        <div className="login">
                            <p>
                                Already have an account?{" "}
                                <a
                                    href="#"
                                    className="login-link"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setIsRegister(false);
                                    }}
                                >
                                    LOGIN
                                </a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Authentication;
