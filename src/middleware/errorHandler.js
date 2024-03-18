const logger = require('../utils/logger');

const pageNotFoundHandler = (req, res) => {
    res.status(404).render('pageNotFound.njk');
}

const exceptionHandler = (err, req, res, next) => {
    res.status(err.status || 500).render('exception.njk', { errorMsg: err.message })
};

const errorLogger = (err, req, res, next) => {
    logger.error(err);
    next(err);
}

module.exports = { pageNotFoundHandler, exceptionHandler, errorLogger }