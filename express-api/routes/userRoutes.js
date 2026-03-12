const express = require("express");
const router = express.Router();

const validateUser = require("../middleware/validateUser");

let users = [];

// GET users
router.get("/", (req, res) => {
    res.json(users);
});

// POST user with validation middleware
router.post("/", validateUser, (req, res) => {

    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email
    };

    users.push(newUser);

    res.status(201).json({
        message: "User created successfully",
        user: newUser
    });

});

module.exports = router;