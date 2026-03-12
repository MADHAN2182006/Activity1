const express = require("express");

const app = express();

const userRoutes = require("./routes/userRoutes");

app.use(express.json());

// API Routes
app.use("/api/users", userRoutes);

// Global Error Handler
app.use((err, req, res, next) => {

    console.error(err.stack);

    res.status(500).json({
        message: "Something went wrong"
    });

});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});