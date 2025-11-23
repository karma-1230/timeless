import Stripe from "stripe";
import User from "../models/User.js";
import Order from "../models/Order.js"; // assume you have an Order model

const stripe = new Stripe(process.env.stripe); // your Stripe secret key here

export const createCheckoutSession = async (req, res) => {
    try {
        const { userId } = req.body;

        // Get user cart from DB
        const user = await User.findById(userId).populate("cart.product");
        if (!user || !user.cart.length) return res.status(400).json({ message: "Cart is empty" });

        // Map cart items to Stripe line items
        const line_items = user.cart.map(item => ({
            price_data: {
                currency: "usd",
                product_data: {
                    name: item.product.title,
                    images: item.product.images, // optional
                },
                unit_amount: item.product.price * 100, // Stripe expects cents
            },
            quantity: item.quantity,
        }));

        // Create checkout session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items,
            mode: "payment",
            success_url: "http://localhost:5173/checkout/success",
            cancel_url: "http://localhost:5173/checkout",
        });

        res.status(200).json({ url: session.url });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
};
