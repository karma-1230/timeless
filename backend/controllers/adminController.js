import Admin from "../models/Admin.js";
import Product from "../models/Product.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";



// --------------------
// Add Item with Images
// --------------------
export const addItem = async (req, res) => {
    try {
        const { title, category, description, price, quantity } = req.body;

        // Convert numbers if they come as strings
        const product = new Product({
            title,
            category,
            description,
            price: Number(price),
            quantity: Number(quantity),
        });

        await product.save();
        res.status(201).json({ message: "Product added successfully", product });
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
};


// --------------------
// Admin Login
// --------------------
export const adminLogin = async (req, res) => {
    const { username, password } = req.body;
    const admin = await Admin.findOne({ username });
    if (!admin) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    // Create JWT
    const token = jwt.sign(
        { id: admin._id, username: admin.username },
        process.env.JWT_SECRET,
        { expiresIn: "1d" } // token valid for 1 day
    );

    res.status(200).json({ message: "Admin logged in", token, admin });
};


// --------------------
// View Items
// --------------------
export const getItems = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
};

// --------------------
// Update Item
// --------------------
export const updateItem = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({ message: "Product updated", product: updatedProduct });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
};

export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);

        const deleted = await Product.findByIdAndDelete(id);
        console.log("not found");

        if (!deleted) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({ message: "Product deleted" });

    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
};
