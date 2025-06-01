const express = require('express');
const app = express();
const config = require("./config/config");

// Fetching from config
const PORT = config.port;

// Middleswares
app.use(express.json()); // Middleware to parse data to json format

// Root endpoint
app.get('/', (req, res) => {
    res.json({message: "Hello from the blog_app_backend API"});
})

// Server
app.listen(PORT, () => {
    console.log(`Blog server is running on port ${PORT}`);
});