import React from "react";
import Navbar from "../Components/Navbar";
import styles from "../Styles/Dashboard.module.css";

const Dashboard = () => {
    return (
        <div className={styles.dashboard}>
            <Navbar />
            <div className={styles.content}>
                <h1>Admin Dashboard</h1>
                <p>Welcome back, Commander of the Streets 🕶️</p>

                <div className={styles.cards}>
                    <div className={styles.card}>
                        <h3>Total Items</h3>
                        <p>320</p>
                    </div>
                    <div className={styles.card}>
                        <h3>Pending Orders</h3>
                        <p>12</p>
                    </div>
                    <div className={styles.card}>
                        <h3>Revenue (This Month)</h3>
                        <p>Rs 275,000</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
