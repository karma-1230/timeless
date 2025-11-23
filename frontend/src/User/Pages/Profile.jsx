import React, { useState } from "react";
import styles from "../Styles/Profile.module.css";
import Footer from "../Components/Footer";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Navbar from "../Components/Navbar";

// --------------------
// ZOD SCHEMA
// --------------------
const profileSchema = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email"),
    phone: z.string().optional(),
    address: z.string().min(1, "Address is required"),
});

export default function Profile() {
    const [editMode, setEditMode] = useState(false);
    const [profilePic, setProfilePic] = useState("/images/default-avatar.jpg");

    const initialData = {
        firstName: "John",
        lastName: "Doe",
        email: "john@example.com",
        phone: "123456789",
        address: "123 Main Street, City, Country",
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: zodResolver(profileSchema),
        defaultValues: initialData,
    });

    const handleEdit = () => setEditMode(true);
    const handleCancel = () => {
        reset();
        setEditMode(false);
    };

    const onSubmit = (data) => {
        console.log("Updated Profile:", data);
        alert("Profile updated successfully!");
        setEditMode(false);
    };

    const handleProfilePicChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => setProfilePic(reader.result);
            reader.readAsDataURL(file);
        }
    };

    const handleDeleteProfile = () => {
        const confirmed = window.confirm(
            "Are you sure you want to delete your profile? This action cannot be undone."
        );
        if (confirmed) {
            alert("Profile deleted successfully!");
            reset(initialData);
            setProfilePic("/images/default-avatar.jpg");
            setEditMode(false);
        }
    };

    return (
        <>
            <Navbar />
            <div className={styles.profilePage}>
                <div className={styles.profileCard}>
                    {/* Left Column: Profile Picture */}
                    <div className={styles.leftColumn}>
                        <div className={styles.profilePicWrapper}>
                            <img src={profilePic} alt="Profile" className={styles.profilePic} />
                            {editMode && (
                                <label className={styles.changePicBtn}>
                                    <span role="img" aria-label="camera">📷</span>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleProfilePicChange}
                                        hidden
                                    />
                                </label>
                            )}
                        </div>
                        <button className={styles.deleteBtn} onClick={handleDeleteProfile}>
                            Delete Profile
                        </button>
                    </div>

                    {/* Right Column: Info Form */}
                    <div className={styles.rightColumn}>
                        <h2>My Profile</h2>
                        <p>Manage your personal information and account settings.</p>

                        {editMode ? (
                            <form onSubmit={handleSubmit(onSubmit)} className={styles.infoForm}>
                                <div className={styles.formRow}>
                                    <label>First Name:</label>
                                    <input {...register("firstName")} />
                                    {errors.firstName && <span className={styles.error}>{errors.firstName.message}</span>}
                                </div>
                                <div className={styles.formRow}>
                                    <label>Last Name:</label>
                                    <input {...register("lastName")} />
                                    {errors.lastName && <span className={styles.error}>{errors.lastName.message}</span>}
                                </div>
                                <div className={styles.formRow}>
                                    <label>Email:</label>
                                    <input {...register("email")} />
                                    {errors.email && <span className={styles.error}>{errors.email.message}</span>}
                                </div>
                                <div className={styles.formRow}>
                                    <label>Phone:</label>
                                    <input {...register("phone")} />
                                </div>
                                <div className={styles.formRow}>
                                    <label>Address:</label>
                                    <input {...register("address")} />
                                    {errors.address && <span className={styles.error}>{errors.address.message}</span>}
                                </div>

                                <div className={styles.buttonRow}>
                                    <button type="submit" className={styles.saveBtn}>Save</button>
                                    <button type="button" className={styles.cancelBtn} onClick={handleCancel}>Cancel</button>
                                </div>
                            </form>
                        ) : (
                            <div className={styles.infoDisplay}>
                                <div className={styles.displayRow}><span className={styles.label}>First Name:</span> <span>{initialData.firstName}</span></div>
                                <div className={styles.displayRow}><span className={styles.label}>Last Name:</span> <span>{initialData.lastName}</span></div>
                                <div className={styles.displayRow}><span className={styles.label}>Email:</span> <span>{initialData.email}</span></div>
                                <div className={styles.displayRow}><span className={styles.label}>Phone:</span> <span>{initialData.phone}</span></div>
                                <div className={styles.displayRow}><span className={styles.label}>Address:</span> <span>{initialData.address}</span></div>

                                <div className={styles.buttonRow}>
                                    <button className={styles.editBtn} onClick={handleEdit}>Edit Profile</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
