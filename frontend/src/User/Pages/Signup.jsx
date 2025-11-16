import { useRef, useState } from "react";
import styles from "../Styles/Signup.module.css";
import { signupUser } from "../../api";

export default function Signup() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const fNameRef = useRef(null);
    const addressRef = useRef(null);
    const lNameRef = useRef(null);

    const [userData, setUserData] = useState({
        fName: "",
        lName: "",
        address: "",
        email: "",
        password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setUserData({
            fName: fNameRef.current.value,
            lName: lNameRef.current.value,
            address: addressRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
        });
        signupUser();
        console.log("User submitted:", userData);
    };

    return (
        <div className={styles.container}>
            <div className={styles.box}>
                {/* Header */}
                <div className={styles.header}>
                    <h5 className={styles.brand}>T I M E L E S S</h5>
                    <nav className={styles.nav}>
                        <a href="/" className={styles.navLink}>
                            Home
                        </a>
                    </nav>
                </div>

                {/* Title */}
                <h3 className={styles.title}>Create new account.</h3>
                <p className={styles.subtitle}>
                    Already a member?{" "}
                    <a href="/login" className={styles.link}>
                        Log in
                    </a>
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.row}>
                        <input
                            type="text"
                            ref={fNameRef}
                            className={styles.input}
                            placeholder="First name"
                        />
                        <input
                            type="text"
                            ref={lNameRef}
                            className={styles.input}
                            placeholder="Last name"
                        />
                    </div>

                    <input
                        type="text"
                        ref={addressRef}
                        className={styles.input}
                        placeholder="Address"
                    />
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
                            Create account
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
