require("dotenv").config();

// This file contains the configuration settings for the application.
// It uses environment variables to set the values, with defaults provided for development purposes.
// The config object is frozen to prevent any modifications to its properties.

const config = Object.freeze({
    port: process.env.PORT || 3000,
    databaseURI: process.env.MONGODB_URI,
    accessTokenSecret : process.env.JWT_SECRET,
    nodeEnv: process.env.NODE_ENV || "development"
})

module.exports = config;