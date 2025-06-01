const config = require('../config/config');

// This middleware function is used to handle errors in an Express application.
const globalErrorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;

    return res.status(statusCode).json({
        status: statusCode,
        message: err.message || 'Internal Server Error',
        errorStack: config.nodeEnv === 'development' ? err.stack : "",
    })


}

module.exports = globalErrorHandler;