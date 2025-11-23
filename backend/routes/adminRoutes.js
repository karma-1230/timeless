import express from "express";
import multer from "multer";
import { adminLogin, addItem, updateItem, getItems } from "../controllers/adminController.js";

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() }); // store files in memory

// Admin login
router.post("/login", adminLogin);

// Add item with multiple images (max 5)
router.post("/item", upload.array("images", 5), addItem);

// Update item by ID
router.put("/item/:id", updateItem);

// View all items
router.get("/items", getItems);

export default router;
