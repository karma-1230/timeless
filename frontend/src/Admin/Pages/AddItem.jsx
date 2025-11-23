import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Navbar from "../Components/Navbar";
import styles from "../Styles/AddItem.module.css";
import { addItem } from "../../api";

// ZOD Schema (images ignored)
const addItemSchema = z.object({
    title: z.string().min(2, "Title is required"),
    category: z.string().min(1, "Please select a category"),
    description: z.string().min(5, "Description must be at least 5 characters"),
    price: z.number().min(1, "Price must be greater than 0"),
    quantity: z.number().min(1, "Quantity must be at least 1"),
});

const AddItem = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: zodResolver(addItemSchema),
    });

    const onSubmit = (data) => {
        addItem(data)
            .then(res => {
                console.log("Item added:", res.data);
                reset();
            })
            .catch(err => console.error(err.response?.data || err));
    };

    return (
        <div className={styles.page}>
            <Navbar />

            <main className={styles.main}>
                <h1 className={styles.title}>Add New Item</h1>

                <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                    {/* Image Upload */}
                    <div className={styles.inputGroup}>
                        <label>Upload Images</label>
                        <input type="file" {...register("images")} multiple />
                        {errors.images && <p className={styles.error}>{errors.images.message}</p>}
                    </div>

                    {/* Title */}
                    <div className={styles.inputGroup}>
                        <label>Title</label>
                        <input type="text" {...register("title")} />
                        {errors.title && <p className={styles.error}>{errors.title.message}</p>}
                    </div>

                    {/* Category */}
                    <div className={styles.inputGroup}>
                        <label>Category</label>
                        <select {...register("category")}>
                            <option value="">Select category</option>
                            <option value="Hoodies">Hoodies</option>
                            <option value="T-Shirts">T-Shirts</option>
                            <option value="Pants">Pants</option>
                            <option value="Accessories">Accessories</option>
                        </select>
                        {errors.category && <p className={styles.error}>{errors.category.message}</p>}
                    </div>

                    {/* Description */}
                    <div className={styles.inputGroup}>
                        <label>Description</label>
                        <textarea rows="4" {...register("description")}></textarea>
                        {errors.description && <p className={styles.error}>{errors.description.message}</p>}
                    </div>

                    {/* Price & Quantity */}
                    <div className={styles.row}>
                        <div className={styles.inputGroup}>
                            <label>Price (PKR)</label>
                            <input type="number" {...register("price", { valueAsNumber: true })} />
                            {errors.price && <p className={styles.error}>{errors.price.message}</p>}
                        </div>

                        <div className={styles.inputGroup}>
                            <label>Quantity</label>
                            <input type="number" {...register("quantity", { valueAsNumber: true })} />
                            {errors.quantity && <p className={styles.error}>{errors.quantity.message}</p>}
                        </div>
                    </div>

                    <button type="submit" className={styles.submitBtn}>
                        Add Item
                    </button>
                </form>
            </main>
        </div>
    );
};

export default AddItem;
