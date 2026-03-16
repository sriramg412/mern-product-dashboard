const User = require("../models/User");
const bcrypt = require("bcryptjs");

exports.register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const hash = await bcrypt.hash(password, 10);

        const user = new User({
            name,
            email,
            password: hash
        });

        await user.save();
        res.status(201).json({ message: "User Registered" });
    } catch (err) {
        console.error("Register error:", err);
        res.status(500).json({ message: "Registration failed", error: err.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const match = await bcrypt.compare(password, user.password);

        if (!match) {
            return res.status(401).json({ message: "Wrong password" });
        }

        res.json({ message: "Login success" });

    } catch (err) {
        console.error("Login error:", err);
        res.status(500).json({ message: "Server error during login", error: err.message });
    }
};