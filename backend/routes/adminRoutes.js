import express from "express";
import multer from "multer";
import { adminLogin, addItem, updateItem, getItems, deleteProduct } from "../controllers/adminController.js";
import { verifyAdmin } from "../middleware.js";

const router = express.Router(); // store files in memory

// Admin login
router.post("/login", adminLogin);

// Add item with multiple images (max 5)
router.post("/item", verifyAdmin, addItem);

// Update item by ID
router.put("/item/:id", verifyAdmin, updateItem);

// View all items
router.get("/items", verifyAdmin, getItems);

router.delete("/items/:id", verifyAdmin, deleteProduct);

export default router;
