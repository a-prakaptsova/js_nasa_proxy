const axios = require('axios');
const logger = require('../utils/logger');
const calculateRequestDates = require('../utils/dateHelper');
const Exception = require('../utils/exceptions/Exception');
const mapAsteroidsData = require('../utils/asteroidsMapper')
const config = require('../config/config')

const getAsteroidsInPeriod = (params) => {
    const dates = calculateRequestDates(params.startDate, params.endDate);
    return axios.get(config.nasaApi.getAsteroidsUrl, {
        params: {
            start_date: dates.startDate,
            end_date: dates.endDate,
            api_key: config.nasaApi.apiKey
        }
    })
        .then((resp) => {
            const mappedAsteroidData = mapAsteroidsData(resp.data, params.count, params.wereDangerousAsteroids);
            logger.log(JSON.stringify(mappedAsteroidData, null, 2));
            logger.log(`From ${dates.startDate} to ${dates.endDate} were seen ${resp.data.element_count} asteroid(s).`);
            return mappedAsteroidData;
        })
        .catch((err) => {
            throw new Exception(err.code || 500, err.message);
        })
}

module.exports = getAsteroidsInPeriod;