const getAsteroids = require('../services/asteroidService')

const getAsteroidsInPeriod = (req, res, next) => {
    getAsteroids(getQueryParams(req))
        .then(data => res.render('asteroids.njk', {asteroidsData: data}))
        .catch(error => next(error));
}

const getQueryParams = (req) => ({
    startDate: req.query.start_date,
    endDate: req.query.end_date,
    count: req.query.count,
    wereDangerousAsteroids: req.query.were_dangerous_asteroid
});

module.exports = { getAsteroidsInPeriod }; 