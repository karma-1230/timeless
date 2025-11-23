import User from "../models/User.js"; // your user model
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// LOGIN
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "Invalid credentials" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

        // Create JWT
        const token = jwt.sign(
            { id: user._id, email: user.email, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        console.log("Login successful");

        // IMPORTANT: send token in JSON instead of cookies
        res.status(200).json({
            message: "Logged in",
            token,
            user: {
                id: user._id,
                email: user.email,
                role: user.role,
                name: user.fName + " " + user.lName,
            },
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
};


// Signup
export const signupUser = async (req, res) => {
    console.log("user is here", req.body);
    try {
        const { fName, lName, email, password, phone, profilePhoto, address } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "User already exists" });

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            fName,
            lName,
            email,
            password: hashedPassword,
            phone,
            profilePhoto,
            address,
        });

        await newUser.save();
        console.log("user created");
        res.status(201).json({ message: "User created successfully", user: newUser });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
};

// Contact Us (just logs for now)
export const contactUs = (req, res) => {
    console.log("Contact Us Hit", req.body);
    res.status(200).json({ message: "Contact request received" });
};
