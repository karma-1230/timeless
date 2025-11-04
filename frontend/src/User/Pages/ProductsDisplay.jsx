import React from "react";
import styles from "../Styles/ProductsDisplay.module.css";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const products = [
    {
        id: 1,
        name: "Kaaven Cool Baggy Pants",
        price: 2499,
        oldPrice: 2999,
        discount: "15% OFF",
        img: "/images/pants.png",
    },
    {
        id: 2,
        name: "Angel Script Tee",
        price: 2299,
        oldPrice: 2499,
        discount: "10% OFF",
        img: "/images/hoodie-3.jpg",
    },
    {
        id: 3,
        name: "Rage Icon",
        price: 2299,
        oldPrice: 2499,
        discount: "10% OFF",
        img: "/images/hoodie-5.jpg",
    },
    {
        id: 4,
        name: "Thunder of Thunder",
        price: 2499,
        oldPrice: 2499,
        discount: "Sold out",
        img: "/images/sweater-1.jpg",
    },
    {
        id: 5,
        name: "Monochrome Tee",
        price: 2299,
        oldPrice: 2499,
        discount: "10% OFF",
        img: "/images/sweater-2.jpg",
    },
    {
        id: 6,
        name: "Dark Ruby",
        price: 2299,
        oldPrice: 2499,
        discount: "10% OFF",
        img: "/images/sweater-3.jpg",
    },
    {
        id: 7,
        name: "Velvet Chains",
        price: 2299,
        oldPrice: 2499,
        discount: "10% OFF",
        img: "/images/chain.jpg",
    },
    {
        id: 8,
        name: "Silhouette Aura",
        price: 2299,
        oldPrice: 2499,
        discount: "10% OFF",
        img: "/images/pant-2.jpg",
    },
    {
        id: 9,
        name: "Winter Mist",
        price: 2299,
        oldPrice: 2499,
        discount: "10% OFF",
        img: "/images/pant.jpg",
    },
    {
        id: 10,
        name: "Crimson",
        price: 2299,
        oldPrice: 2499,
        discount: "10% OFF",
        img: "/images/crimson.jpg",
    },
    {
        id: 11,
        name: "Dark Earth",
        price: 2299,
        oldPrice: 2499,
        discount: "10% OFF",
        img: "/images/chain-2.jpg",
    },
    {
        id: 12,
        name: "For the Gods",
        price: 2299,
        oldPrice: 2499,
        discount: "10% OFF",
        img: "/images/chain-3.jpg",
    },
];

function ProductsDisplay() {
    return (
        <>
            <Navbar />
            <div className={styles.wrapper}>
                <header className={styles.header}>
                    <h1>TIMELESS COLLECTION</h1>
                    <p>
                        No trends, no validation—just original street identity. “Street Aura” isn’t about fitting in,
                        it’s about standing apart. Wear it if it speaks to you. If not, it was never meant for you.
                    </p>
                    <div className={styles.meta}>
                        <span>Sort by: Featured</span>
                        <span>12 Products</span>
                    </div>
                </header>

                <div className={styles.grid}>
                    {products.map((p) => (
                        <div key={p.id} className={styles.card}>
                            <div className={styles.imageContainer}>
                                <img src={p.img} alt={p.name} />
                                <span
                                    className={`${styles.badge} ${p.discount === "Sold out" ? styles.soldOut : ""
                                        }`}
                                >
                                    {p.discount}
                                </span>
                            </div>
                            <div className={styles.info}>
                                <h3>{p.name}</h3>
                                <p className={styles.price}>
                                    <span className={styles.oldPrice}>Rs {p.oldPrice.toLocaleString()}</span>
                                    Rs {p.price.toLocaleString()}
                                </p>
                                <button className={styles.btn}>Choose options</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ProductsDisplay;
