import React, { useState } from "react";
import styles from "../Styles/Cart.module.css";
import Footer from "../Components/Footer";

export default function Cart() {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Black Hoodie",
            price: 45.99,
            quantity: 1,
            image: "/images/hoodie.jpg",
        },
        {
            id: 2,
            name: "White T-Shirt",
            price: 25.5,
            quantity: 2,
            image: "/images/tshirt.jpg",
        },
    ]);

    const handleQuantityChange = (id, delta) => {
        setCartItems((prev) =>
            prev.map((item) =>
                item.id === id
                    ? { ...item, quantity: Math.max(item.quantity + delta, 1) }
                    : item
            )
        );
    };

    const handleRemoveItem = (id) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    const subtotal = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );
    const shipping = subtotal > 0 ? 5 : 0;
    const total = subtotal + shipping;

    return (
        <div className={styles.cartPage}>
            <div className={styles.cartContainer}>
                <h2>My Cart</h2>

                {cartItems.length === 0 ? (
                    <p className={styles.empty}>Your cart is empty.</p>
                ) : (
                    <>
                        <div className={styles.cartItems}>
                            {cartItems.map((item) => (
                                <div className={styles.cartItem} key={item.id}>
                                    <img src={item.image} alt={item.name} />
                                    <div className={styles.details}>
                                        <h5>{item.name}</h5>
                                        <p>${item.price.toFixed(2)}</p>
                                        <div className={styles.quantity}>
                                            <button
                                                onClick={() => handleQuantityChange(item.id, -1)}
                                            >
                                                -
                                            </button>
                                            <span>{item.quantity}</span>
                                            <button
                                                onClick={() => handleQuantityChange(item.id, 1)}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    <button
                                        className={styles.removeBtn}
                                        onClick={() => handleRemoveItem(item.id)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className={styles.cartSummary}>
                            <div className={styles.summaryRow}>
                                <span>Subtotal:</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>
                            <div className={styles.summaryRow}>
                                <span>Shipping:</span>
                                <span>${shipping.toFixed(2)}</span>
                            </div>
                            <div className={styles.summaryRowTotal}>
                                <span>Total:</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                            <button className={styles.checkoutBtn}>Proceed to Checkout</button>
                        </div>
                    </>
                )}
            </div>
            <Footer />
        </div>
    );
}
