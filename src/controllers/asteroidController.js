const getAsteroids = require('../services/asteroidService')

const getAsteroidsInPeriod = (req, res, next) => {
    getAsteroids()
        .then(data => res.status(200)
            .json(data))
        .catch(error => next(error));
}

module.exports = { getAsteroidsInPeriod }; 