const axios = require('axios');
const logger = require('../utils/logger');
const dates = require('../utils/dateHelper');

const getAsteroidsInPeriod = () => {
    return axios.get(process.env.GET_ASTEROIDS_URL, {
        params: {
            start_date: dates.START_DATE,
            end_date: dates.END_DATE,
            api_key: process.env.API_KEY
        }
    })
        .then((resp) => {
            logger.log(JSON.stringify(resp.data, null, 2));
            logger.log(`From ${dates.START_DATE} to ${dates.END_DATE} were seen ${resp.data.element_count} asteroid(s).`);
            return resp.data;
        })
        .catch((err) => {
            throw new Exception(500, err.message);
        })
}

module.exports = getAsteroidsInPeriod;