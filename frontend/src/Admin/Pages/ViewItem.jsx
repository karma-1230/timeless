import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import styles from "../Styles/ViewItems.module.css";
import { viewItems } from "../../api";

const itemsList = [
    {
        id: 1,
        name: "Shadowed Hoodie",
        category: "Hoodies",
        price: 7200,
        stock: 8,
        image: "/images/hoodie-1.jpg",
    },
    {
        id: 2,
        name: "Crimson Oversized Tee",
        category: "T-Shirts",
        price: 3500,
        stock: 15,
        image: "/images/pant-2.jpg",
    },
    {
        id: 3,
        name: "Chain Cargo Pants",
        category: "Pants",
        price: 6400,
        stock: 4,
        image: "/images/pant-3.jpg",
    },
    {
        id: 4,
        name: "Dark Velvet Cap",
        category: "Accessories",
        price: 2800,
        stock: 0,
        image: "/images/crimson.jpg",
    },
];

const ViewItems = () => {
    const [category, setCategory] = useState("All");
    const [search, setSearch] = useState("");

    const filteredItems = itemsList.filter((item) => {
        const matchCategory = category === "All" || item.category === category;
        const matchSearch = item.name.toLowerCase().includes(search.toLowerCase());

        return matchCategory && matchSearch;

    });

    const handleClick = async () => {
        await viewItems();
    }

    return (<>
        <Navbar />


        <div className={styles.page}>

            <main className={styles.main}>
                <div className={styles.header}>
                    <h1>Manage Store Items</h1>
                    <div className={styles.filters}>
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className={styles.dropdown}
                        >
                            <option value="All">All Categories</option>
                            <option value="Hoodies">Hoodies</option>
                            <option value="T-Shirts">T-Shirts</option>
                            <option value="Pants">Pants</option>
                            <option value="Accessories">Accessories</option>
                        </select>

                        <input
                            type="text"
                            placeholder="Search item..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className={styles.search}
                        />
                    </div>
                </div>
                <button className={styles.edit} onClick={handleClick}> VIEW BUTTON </button>
                <div className={styles.grid}>
                    {filteredItems.length > 0 ? (
                        filteredItems.map((item) => (
                            <div key={item.id} className={styles.card}>
                                <img src={item.image} alt={item.name} className={styles.image} />
                                <div className={styles.info}>
                                    <h3>{item.name}</h3>
                                    <p className={styles.category}>{item.category}</p>
                                    <p className={styles.price}>PKR {item.price}</p>
                                    <p
                                        className={`${styles.stock} ${item.stock === 0
                                            ? styles.out
                                            : item.stock <= 5
                                                ? styles.low
                                                : styles.in
                                            }`}
                                    >
                                        {item.stock === 0
                                            ? "Out of Stock"
                                            : item.stock <= 5
                                                ? "Low Stock"
                                                : "In Stock"}
                                    </p>
                                </div>
                                <div className={styles.actions}>
                                    <button className={styles.edit}>Edit</button>
                                    <button className={styles.delete}>Delete</button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className={styles.noItems}>No items found.</p>
                    )}
                </div>
            </main>
        </div>
    </>
    );
};

export default ViewItems;
