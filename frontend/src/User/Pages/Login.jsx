import { useRef, useState } from "react";
import styles from "../Styles/Login.module.css";
import { loginUser } from "../../api";

function Login() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const [userData, setUserData] = useState({ email: "", password: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        };
        loginUser();
        setUserData(newUser);
        console.log("User data:", newUser);
    };

    return (
        <div className={styles.container}>
            <div className={styles.box}>
                {/* Header */}
                <div className={styles.header}>
                    <h5 className={styles.brand}>T I M E L E S S</h5>
                    <nav className={styles.nav}>
                        <a href="/" className={styles.navLink}>Home</a>
                    </nav>
                </div>

                {/* Title */}
                <h3 className={styles.title}>Login to your account</h3>
                <p className={styles.subtitle}>
                    Don’t have an account?{" "}
                    <a href="/signup" className={styles.link}>Sign Up</a>
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} className={styles.form}>
                    <input
                        type="email"
                        ref={emailRef}
                        className={styles.input}
                        placeholder="Email address"
                    />
                    <input
                        type="password"
                        ref={passwordRef}
                        className={styles.input}
                        placeholder="Password"
                    />

                    <div className={styles.buttonRow}>
                        <button type="button" className={styles.googleBtn}>
                            Google
                        </button>
                        <button type="submit" className={styles.submitBtn}>
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login
