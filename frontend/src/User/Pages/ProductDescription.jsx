import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { getProductById, addToCart, submitRating } from "../../api";
import styles from "../Styles/ProductDescription.module.css";
import Footer from "../Components/Footer"

const ProductDescription = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);
    const [userRating, setUserRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [averageRating, setAverageRating] = useState(0);

    useEffect(() => {
        const loadProduct = async () => {
            try {
                const res = await getProductById(id);
                setProduct(res.data);

                if (res.data.ratings.length > 0) {
                    const avg =
                        res.data.ratings.reduce((acc, r) => acc + r.rating, 0) /
                        res.data.ratings.length;
                    setAverageRating(avg);
                }

                setLoading(false);
            } catch (err) {
                console.error(err);
                setLoading(false);
            }
        };

        loadProduct();
    }, [id]);

    const handleQuantityChange = (delta) => {
        if (!product) return;
        setQuantity((prev) => Math.max(1, Math.min(prev + delta, product.quantity)));
    };

    const handleAddToCart = async () => {
        try {
            await addToCart(product._id, quantity);
            alert("Added to cart!");
        } catch (err) {
            console.error(err);
            alert("Failed to add to cart");
        }
    };

    const handleRatingSubmit = async () => {
        if (userRating < 1 || userRating > 5) {
            alert("Rating must be between 1 and 5");
            return;
        }

        try {
            await submitRating(product._id, userRating, "");
            const res = await getProductById(id);
            setProduct(res.data);
            const avg =
                res.data.ratings.reduce((acc, r) => acc + r.rating, 0) /
                res.data.ratings.length;
            setAverageRating(avg);
            alert("Rating submitted!");
            setUserRating(0);
            setHoverRating(0);
        } catch (err) {
            console.error(err);
            alert("Failed to submit rating");
        }
    };

    if (loading)
        return <p style={{ textAlign: "center", marginTop: "100px" }}>Loading...</p>;
    if (!product)
        return <p style={{ textAlign: "center", marginTop: "100px" }}>Product not found</p>;

    return (
        <>
            <Navbar />
            <div className={styles.productPage}>
                <div className={styles.leftColumn}>
                    <div className={styles.imageWrapper}>
                        <img
                            src={`http://localhost:5000${product.image}`}
                            alt={product.title}
                            className={styles.productImage}
                        />
                    </div>
                </div>

                <div className={styles.rightColumn}>
                    <h1 className={styles.title}>{product.title}</h1>
                    <p className={styles.category}>{product.category}</p>
                    <div className={styles.price}>
                        {product.discount > 0 && (
                            <span className={styles.originalPrice}>
                                PKR {(product.price * (100 / (100 - product.discount))).toFixed(0)}
                            </span>
                        )}
                        <span className={styles.salePrice}>PKR {product.price}</span>
                    </div>

                    {/* Ratings */}
                    <div className={styles.ratingSection}>
                        <div className={styles.currentRating}>
                            {Array.from({ length: 5 }, (_, i) => (
                                <span
                                    key={i}
                                    className={
                                        i < Math.round(averageRating) ? styles.filledStar : styles.emptyStar
                                    }
                                >
                                    ★
                                </span>
                            ))}
                            <span className={styles.averageText}>
                                ({averageRating.toFixed(1)})
                            </span>
                        </div>

                        <div className={styles.userRating}>
                            {Array.from({ length: 5 }, (_, i) => (
                                <span
                                    key={i}
                                    className={
                                        i < (hoverRating || userRating) ? styles.filledStar : styles.emptyStar
                                    }
                                    onMouseEnter={() => setHoverRating(i + 1)}
                                    onMouseLeave={() => setHoverRating(0)}
                                    onClick={() => setUserRating(i + 1)}
                                >
                                    ★
                                </span>
                            ))}
                            <button className={styles.submitRatingBtn} onClick={handleRatingSubmit}>
                                Submit Rating
                            </button>
                        </div>
                    </div>

                    {/* Quantity Selector */}
                    <div className={styles.quantitySelector}>
                        <button onClick={() => handleQuantityChange(-1)}>-</button>
                        <span>{quantity}</span>
                        <button onClick={() => handleQuantityChange(1)}>+</button>
                    </div>

                    {/* Add to Cart */}
                    <button className={styles.addCartButton} onClick={handleAddToCart}>
                        Add to Cart
                    </button>

                    {/* Product Description */}
                    <div className={styles.descriptionSection}>
                        <h3>Product Details</h3>
                        <p>{product.description}</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ProductDescription;
