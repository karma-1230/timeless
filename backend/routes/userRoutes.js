import express from "express";
import User from "../models/User.js"; // <- import your User model
import { signupUser, loginUser, contactUs } from "../controllers/userController.js";
import { verifyUser } from "../middleware.js";

const router = express.Router();

// Signup, Login, Contact
router.post("/signup", signupUser);
router.post("/login", loginUser);
router.post("/contactus", contactUs);

router.post("/cart", verifyUser, async (req, res) => {
    try {
        const { productId } = req.body;
        const user = await User.findById(req.user.id);

        const existing = user.cart.find(item => item.product && item.product.toString() === productId);
        if (existing) {
            existing.quantity += 1;
        } else {
            user.cart.push({ product: productId, quantity: 1 });
        }

        await user.save();
        console.log("added");
        res.status(200).json({ message: "Product added to cart" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
});

// Get current logged-in user
router.get("/me", verifyUser, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).populate("cart.product");
        if (!user) return res.status(404).json({ message: "User not found" });

        // Send user data excluding sensitive info
        const { password, ...userData } = user._doc;
        res.status(200).json({ user: userData });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
});

export default router;
