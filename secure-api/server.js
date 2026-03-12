const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const rateLimit = require("express-rate-limit");

const userRoutes = require("./routes/userRoutes");

const app = express();

// Security Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Rate Limiting    
const limiter = rateLimit({
 windowMs: 15 * 60 * 1000,
 max: 100
});

app.use(limiter);

// Routes
app.use("/api/users", userRoutes);

// Global Error Handling
app.use((err, req, res, next) => {
 console.error(err.stack);

 res.status(500).json({
  message: "Internal Server Error"
 });
});

app.listen(5000, () => {
 console.log("Secure API running on port 5000");
});