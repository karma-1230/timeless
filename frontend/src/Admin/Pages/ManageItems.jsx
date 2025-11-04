import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../Styles/ManageItems.module.css";
import Navbar from "../Components/Navbar";

const ManageItems = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.page}>
            <Navbar />

            <div className={styles.container}>
                <h1 className={styles.title}>Manage Inventory</h1>
                <p className={styles.subtitle}>
                    Take control of your gothic collection — add, edit, or review your dark masterpieces.
                </p>

                <div className={styles.cardContainer}>
                    <div className={styles.card} onClick={() => navigate("/add-item")}>
                        <h2>Add New Item</h2>
                        <p>Introduce something bold to your Timeless lineup.</p>
                    </div>

                    <div className={styles.card} onClick={() => navigate("/view-items")}>
                        <h2>View Items</h2>
                        <p>Browse your creations in all their dark elegance.</p>
                    </div>

                    <div className={styles.card} onClick={() => navigate("/update-item")}>
                        <h2>Update Item</h2>
                        <p>Modify details or refine your designs.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageItems;
