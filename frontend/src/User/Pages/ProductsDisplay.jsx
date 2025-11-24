import React, { useState } from "react";
import styles from "../Styles/ProductsDisplay.module.css";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { addToCart, getProducts } from "../../api"; // API function
import { useEffect } from "react";

const staticProducts = [
    { id: 1, title: "Kaaven Cool Baggy Pants", price: 2499, oldPrice: 2999, discount: "15% OFF", img: "/images/pants.png" },
    { id: 2, title: "Angel Script Tee", price: 2299, oldPrice: 2499, discount: "10% OFF", img: "/images/hoodie-3.jpg" },
    { id: 3, title: "Rage Icon", price: 2299, oldPrice: 2499, discount: "10% OFF", img: "/images/hoodie-5.jpg" },
    { id: 4, title: "Thunder of Thunder", price: 2499, oldPrice: 2499, discount: "Sold out", img: "/images/sweater-1.jpg" },
    { id: 5, title: "Monochrome Tee", price: 2299, oldPrice: 2499, discount: "10% OFF", img: "/images/sweater-2.jpg" },
    { id: 6, title: "Dark Ruby", price: 2299, oldPrice: 2499, discount: "10% OFF", img: "/images/sweater-3.jpg" },
    { id: 7, title: "Velvet Chains", price: 2299, oldPrice: 2499, discount: "10% OFF", img: "/images/chain.jpg" },
    { id: 8, title: "Silhouette Aura", price: 2299, oldPrice: 2499, discount: "10% OFF", img: "/images/pant-2.jpg" },
    { id: 9, title: "Winter Mist", price: 2299, oldPrice: 2499, discount: "10% OFF", img: "/images/pant.jpg" },
    { id: 10, title: "Crimson", price: 2299, oldPrice: 2499, discount: "10% OFF", img: "/images/crimson.jpg" },
    { id: 11, title: "Dark Earth", price: 2299, oldPrice: 2499, discount: "10% OFF", img: "/images/chain-2.jpg" },
    { id: 12, title: "For the Gods", price: 2299, oldPrice: 2499, discount: "10% OFF", img: "/images/chain-3.jpg" },
];

function ProductsDisplay() {
    const [cartMessage, setCartMessage] = useState("");
    const [dbProducts, setDbProducts] = useState([]);
    const [allProducts, setAllProducts] = useState(staticProducts);

    useEffect(() => {
        getProducts()
            .then((res) => {
                console.log(res.data);
                setAllProducts([...staticProducts, res.data]); // merge static + DB products
            })
            .catch((err) => console.error(err));
        console.log(allProducts);
    }, []);

    const handleAddToCart = async (product) => {
        const token = localStorage.getItem("token");
        if (!token) {
            setCartMessage("Please login to add items to cart");
            return;
        }
        console.log(product._id);

        try {
            await addToCart(product._id, token);
            setCartMessage(`${product.title} added to cart!`);
            setTimeout(() => setCartMessage(""), 2000);
        } catch (err) {
            console.error(err);
            setCartMessage("Failed to add item to cart");
        }
    };

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
                        <span>{allProducts.length} Products</span>
                    </div>
                    {cartMessage && <p className={styles.cartMessage}>{cartMessage}</p>}
                </header>

                <div className={styles.grid}>
                    {allProducts.map((p) => (
                        <div key={p.id} className={styles.card}>
                            <div className={styles.imageContainer}>
                                <img src={p.img} alt={p.title} />
                                <span
                                    className={`${styles.badge} ${p.discount === "Sold out" ? styles.soldOut : ""
                                        }`}
                                >
                                    {p.discount}
                                </span>
                            </div>
                            <div className={styles.info}>
                                <h3>{p.title}</h3>
                                <p className={styles.price}>
                                    <span className={styles.oldPrice}>
                                        Rs {p.oldPrice}
                                    </span>{" "}
                                    Rs {p.price}
                                </p>
                                <button
                                    className={styles.btn}
                                    onClick={() => handleAddToCart(p)}
                                    disabled={p.discount === "Sold out"}
                                >
                                    {p.discount === "Sold out" ? "Sold Out" : "Add to Cart"}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ProductsDisplay;
