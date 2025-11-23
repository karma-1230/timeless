import Stripe from "stripe";
import dotenv from "dotenv";

dotenv.config();
const stripe = new Stripe(process.env.stripe, { apiVersion: "2022-11-15" });

export const createCheckoutSession = async (req, res) => {
    try {
        const { lineItems } = req.body;

        if (!lineItems || !lineItems.length)
            return res.status(400).json({ message: "Cart is empty" });

        // Map to Stripe's expected format
        const stripeLineItems = lineItems.map(item => ({
            price_data: {
                currency: item.currency,
                product_data: {
                    name: item.name,
                    description: item.description,
                    // images: item.images || [], // optional
                },
                unit_amount: item.amount, // amount in cents
            },
            quantity: item.quantity,
        }));

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: stripeLineItems,
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
