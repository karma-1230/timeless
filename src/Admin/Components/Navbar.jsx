import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../Styles/Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>TIMELESS</div>

            <div className={styles.links}>
                <NavLink
                    to="/admin/"
                    className={({ isActive }) =>
                        isActive ? `${styles.link} ${styles.active}` : styles.link
                    }
                >
                    Dashboard
                </NavLink>

                <NavLink
                    to="/admin/manage-items"
                    className={({ isActive }) =>
                        isActive ? `${styles.link} ${styles.active}` : styles.link
                    }
                >
                    Manage Items
                </NavLink>

                <NavLink
                    to="/admin/orders"
                    className={({ isActive }) =>
                        isActive ? `${styles.link} ${styles.active}` : styles.link
                    }
                >
                    Orders
                </NavLink>

                <NavLink
                    to="/admin/settings"
                    className={({ isActive }) =>
                        isActive ? `${styles.link} ${styles.active}` : styles.link
                    }
                >
                    Settings
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
