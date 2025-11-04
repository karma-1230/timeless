import { createBrowserRouter, Router } from "react-router-dom";
import LandingPage from "./User/Pages/Landingpage"
import ProductsDisplay from "./User/Pages/ProductsDisplay";
import Dashboard from "./Admin/Pages/Dashboard";
import ManageItems from "./Admin/Pages/ManageItems";
import AddItem from "./Admin/Pages/AddItem";
import UpdateItem from "./Admin/Pages/UpdateItem";
import ViewItems from "./Admin/Pages/ViewItem";
import Signup from "./User/Pages/Signup";
import Login from "./User/Pages/Login";
import AboutUs from "./User/Pages/AboutUs";
import ContactUs from "./User/Pages/ContactUs";



const router = createBrowserRouter([
    { path: "/", element: <LandingPage /> },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <Signup /> },
    { path: "/AboutUs", element: <AboutUs /> },
    { path: "/ContactUs", element: <ContactUs /> },
    { path: "/Products", element: <ProductsDisplay /> },
    { path: "/admin/dashboard", element: <Dashboard /> },
    { path: "/admin/manage-items", element: <ManageItems /> },
    { path: "/add-item", element: <AddItem /> },
    { path: "/update-item", element: <UpdateItem /> },
    { path: "/view-items", element: <ViewItems /> },
])

export default router