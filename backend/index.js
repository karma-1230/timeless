import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());


app.post("/api/login", (req, res) => {
    console.log("Login endpoint connected");
});

app.post("/api/signup", (req, res) => {
    console.log("Signup endpoint connected");
});

app.post("/api/contact", (req, res) => {
    console.log("Contact form connected");
});

app.get("/api/products", (req, res) => {
    console.log("Products fetch connected");
});

// ---------------------- ADMIN ROUTES --------------------------------

app.post("/api/admin/add-item", (req, res) => {
    console.log("Add item connected");
});

app.get("/api/admin/view-items", (req, res) => {
    console.log("View items connected");
});

app.put("/api/admin/update-item/:id", (req, res) => {
    console.log(`Update item connected for ID ${req.params.id}`);
});

// ---------------------- SERVER START --------------------------------

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
