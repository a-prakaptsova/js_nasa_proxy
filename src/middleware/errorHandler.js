const logger = require('../utils/logger');

const pageNotFoundHandler = (req, res) => {
    res.status(404).json({ message: 'Page not found' });
}

const exceptionHandler = (err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message
    });
}

const errorLogger = (err, req, res, next) => {
    logger.error(err);
    next(err);
}

module.exports = { pageNotFoundHandler, exceptionHandler, errorLogger }