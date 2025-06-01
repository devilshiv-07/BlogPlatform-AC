const express = require('express');
const app = express();
const config = require("./config/config");
const connectDB = require("./config/database");
const globalErrorHandler = require("./middlewares/globalErrorHandler");

// Fetching from config
const PORT = config.port;
connectDB();


// Middleswares
app.use(express.json()); // Middleware to parse data to json format

// Root endpoint
app.get('/', (req, res) => {
    res.json({message: "Hello from the blog_app_backend API"});
})

// Global Error Handler
app.use(globalErrorHandler);

// Server
app.listen(PORT, () => {
    console.log(`Blog server is running on port ${PORT}`);
});