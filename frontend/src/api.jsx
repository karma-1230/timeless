import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5000/api",
    headers: {
        "Content-Type": "application/json",
    },
});


export const loginUser = () => {
    return api.post("/login");
};

export const signupUser = () => {
    return api.post("/signup");
};

export const sendContactForm = () => {
    return api.post("/contact");
};

export const getProducts = () => {
    return api.get("/products");
};


export const addItem = () => {
    return api.post("/admin/add-item");
};

export const viewItems = () => {
    return api.get("/admin/view-items");
};

export const updateItem = (id) => {
    return api.put(`/admin/update-item/${id}`);
};

export default api;
