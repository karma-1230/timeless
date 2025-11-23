import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5000",
});

// User
export const loginUser = (data) => api.post("/user/login", data);
export const signupUser = (data) => api.post("/user/signup", data);
export const sendContactForm = (data) => api.post("/user/contactus", data);

export const addToCart = async (productId, token) => {
    return axios.post(
        "http://localhost:5000/user/cart",
        { productId },
        {
            headers: { Authorization: `Bearer ${token}` },
        }
    );
};

// Products
export const getProducts = () => api.get("/products"); // fetch all
export const getProductById = (id) => api.get(`/products/${id}`);

// Admin
export const addItem = (data) => api.post("/admin/item", data);
export const viewItems = () => api.get("/admin/items");
export const updateItem = (data) => api.put(`/admin/item/${data.id}`, data);

export default api;
