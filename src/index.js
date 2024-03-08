const moment = require('moment');
const axios = require('axios');

const DATE_FORMAT = 'YYYY-MM-DD';

const START_DATE = moment().day(1).format(DATE_FORMAT);
const END_DATE = moment().day(5).format(DATE_FORMAT);

const API_KEY = '0bo6YpVVWO1hHYtK8gHw82nyz9cReQZBJjeR4XiV';
const GET_ASTEROIDS_URL = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${START_DATE}&end_date=${END_DATE}&api_key=${API_KEY}`;

const getAllAsteroidsInPeriod = () => {
    axios.get(GET_ASTEROIDS_URL)
    .then((responce) => {
        printResults(responce.data);
    })
}

const printJsonToConsole = (data) => {
    console.log(JSON.stringify(data, null, 2));
}

const printAsteroidCountToConsole = (asteroidCount) => {
    console.log(`From ${START_DATE} to ${END_DATE} were seen ${asteroidCount} asteroid(s).`);
}

const printResults = (data) => {
    printJsonToConsole(data);
    printAsteroidCountToConsole(data.element_count);
}

getAllAsteroidsInPeriod();