import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../Styles/Checkout.module.css";

export default function Checkout() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Fetch user info
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) {
                    setLoading(false);
                    return;
                }

                const res = await axios.get("http://localhost:5000/user/me", {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setUser(res.data.user);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    const handleOrderNow = async () => {
        if (!user || !user.cart || user.cart.length === 0) return;

        try {
            const token = localStorage.getItem("token");

            const res = await axios.post(
                "http://localhost:5000/order/create-checkout-session",
                { cart: user.cart },
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );

            // Redirect to Stripe Checkout
            window.location.href = res.data.url;
        } catch (err) {
            console.error(err);
            alert("Error creating checkout session.");
        }
    };

    if (loading) return <p>Loading...</p>;
    if (!user) return <p>Please log in to checkout.</p>;

    const totalPrice = user.cart?.reduce(
        (acc, item) => acc + item.product.price * item.quantity,
        0
    );

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Checkout</h2>

            {user.cart?.length > 0 ? (
                <>
                    <div className={styles.cartItems}>
                        {user.cart.map((item, idx) => (
                            <div key={idx} className={styles.cartItem}>
                                <img
                                    src={item.product.images[0]}
                                    alt={item.product.title}
                                    className={styles.image}
                                />
                                <div className={styles.details}>
                                    <h5>{item.product.title}</h5>
                                    <p>Quantity: {item.quantity}</p>
                                    <p>Price: ${item.product.price}</p>
                                    <p>Subtotal: ${item.product.price * item.quantity}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={styles.summary}>
                        <h4>Total: ${totalPrice}</h4>
                        <button className={styles.orderBtn} onClick={handleOrderNow}>
                            Order Now
                        </button>
                    </div>
                </>
            ) : (
                <p>Your cart is empty.</p>
            )}
        </div>
    );
}
