require("dotenv").config();

const config = Object.freeze({
    port: process.env.PORT || 3000,
})

module.exports = config;