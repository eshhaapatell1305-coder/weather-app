const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();
const users = require("../data/users");
const auth = require("../middleware/auth");

// Register User
router.post("/register", async (req, res) => {

    const { name, email, password } = req.body;

    // Check empty fields
    if (!name || !email || !password) {
        return res.status(400).json({
            message: "All fields are required"
        });
    }

    // Check if user already exists
    const userExists = users.find(user => user.email === email);

    if (userExists) {
        return res.status(400).json({
            message: "User already exists"
        });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
        id: users.length + 1,
        name,
        email,
        password: hashedPassword
    };

    users.push(newUser);

    res.status(201).json({
        message: "User Registered Successfully",
        user: {
            id: newUser.id,
            name: newUser.name,
            email: newUser.email
        }
    });

});
// Login User
router.post("/login", async (req, res) => {

    const { email, password } = req.body;

    // Check empty fields
    if (!email || !password) {
        return res.status(400).json({
            message: "Email and Password are required"
        });
    }

    // Find user
    const user = users.find(user => user.email === email);

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        return res.status(401).json({
            message: "Invalid Password"
        });
    }

    // Generate JWT Token
    const token = jwt.sign(
        {
            id: user.id,
            email: user.email
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "1h"
        }
    );

    res.json({
        message: "Login Successful",
        token
    });

});

// Protected Route
router.get("/profile", auth, (req, res) => {
    res.json({
        message: "Welcome to your profile",
        user: req.user
    });
});

module.exports = router;