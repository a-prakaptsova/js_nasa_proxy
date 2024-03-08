const { previousFriday, previousMonday, format } = require("date-fns");
const axios = require('axios');
require('dotenv').config();

const END_DATE = previousFriday(new Date());
const START_DATE = previousMonday(END_DATE);

const START_DATE_FORMATTED = format(START_DATE, process.env.DATE_FORMAT);
const END_DATE_FORMATTED = format(END_DATE, process.env.DATE_FORMAT);

const getAllAsteroidsInPeriod = () => {
    axios.get(process.env.GET_ASTEROIDS_URL, {
        params: {
            start_date: START_DATE_FORMATTED,
            end_date: END_DATE_FORMATTED,
            api_key: process.env.API_KEY
        }
    })
        .then((responce) => {
            printResults(responce.data);
        })
}

const printJsonToConsole = (data) => {
    console.log(JSON.stringify(data, null, 2));
}

const printAsteroidCountToConsole = (asteroidCount) => {
    console.log(`From ${START_DATE_FORMATTED} to ${END_DATE_FORMATTED} were seen ${asteroidCount} asteroid(s).`);
}

const printResults = (data) => {
    printJsonToConsole(data);
    printAsteroidCountToConsole(data.element_count);
}

getAllAsteroidsInPeriod();