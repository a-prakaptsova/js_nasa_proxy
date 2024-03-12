const axios = require('axios');
const logger = require('../utils/logger');
const dates = require('../utils/dateHelper');
const Exception = require('../utils/exceptions/Exception');
const mapAsteroidsData = require('../utils/asteroidsMapper')

const getAsteroidsInPeriod = () => {
    return axios.get(process.env.GET_ASTEROIDS_URL, {
        params: {
            start_date: dates.START_DATE,
            end_date: dates.END_DATE,
            api_key: process.env.API_KEY
        }
    })
        .then((resp) => {
            const mappedAsteroidData = mapAsteroidsData(resp.data);
            logger.log(JSON.stringify(mappedAsteroidData, null, 2));
            logger.log(`From ${dates.START_DATE} to ${dates.END_DATE} were seen ${resp.data.element_count} asteroid(s).`);
            return mappedAsteroidData;
        })
        .catch((err) => {
            throw new Exception(err.code || 500, err.message);
        })
}

module.exports = getAsteroidsInPeriod;