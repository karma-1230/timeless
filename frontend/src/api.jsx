import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5000",
});

const token = localStorage.getItem("token");

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

export const fetchItems = async () => {
    const token = localStorage.getItem("token");

    return api.get("admin/items", {
        headers: { Authorization: `Bearer ${token}` }
    });
};

export const deleteItem = async (id) => {


    return api.delete(`admin/items/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
    });
};

// Admin
export const addItem = (data) => api.post("/admin/item", data, {
    headers: {
        Authorization: `Bearer ${token}`,
    },
});
export const updateItem = (data) => api.put(`/admin/item/${data.id}`, data);

export default api;
