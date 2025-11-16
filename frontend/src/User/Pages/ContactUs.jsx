import React, { useState, useRef } from "react";
import styles from "../Styles/ContactUs.module.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { sendContactForm } from "../../api";

function ContactUs() {
    // useState → store form input values
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    });

    // useRef → reference to first name field
    const firstInputRef = useRef(null);

    // handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // handle submit
    const handleSubmit = (e) => {
        e.preventDefault();

        // example: log and alert message
        console.log("Submitted Data:", formData);
        alert(`Thank you, ${formData.firstName}! We’ll get back to you soon.`);
        sendContactForm();
        // reset form
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
        });
    };

    return (<>
        <Navbar />
        <div className={styles.contactContainer}>
            {/* Left image */}
            <div className={styles.imageSection}>
                <img src="/images/contactUs.jpg" alt="Karvaan Apparel" />
            </div>

            {/* Right form */}
            <div className={styles.formSection}>
                <h2>TIMELESS Support</h2>
                <p>Leave your message and we’ll get back to you shortly.</p>

                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.nameRow}>
                        <input
                            ref={firstInputRef}
                            type="text"
                            name="firstName"
                            placeholder="First name*"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last name*"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <input
                        type="email"
                        name="email"
                        placeholder="Email*"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={handleChange}
                    />

                    <textarea
                        name="message"
                        placeholder="Message*"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>

                    <button type="submit" className={styles.submitBtn}>
                        Next
                    </button>
                </form>
            </div>
        </div>
        <Footer />
    </>
    );
};

export default ContactUs;
