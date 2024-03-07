const https = require('https');

const DEFAULT_ENCODING = 'utf8';

const START_DATE = '2024-03-04';
const END_DATE = '2024-03-08';

const API_KEY = '0bo6YpVVWO1hHYtK8gHw82nyz9cReQZBJjeR4XiV';
const GET_ASTEROIDS_URL = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${START_DATE}&end_date=${END_DATE}&api_key=${API_KEY}`;

const getAllAsteroidsInPeriod = () => {
    https.get(GET_ASTEROIDS_URL, (res) => {
        res.setEncoding(DEFAULT_ENCODING);
        let body = '';

        res.on("data", (chunk) => {
            body += chunk;
        });

        res.on('end', () => {
            printResults(body);
        });
    })
}

const printJsonToConsole = (data) => {
    console.log(JSON.stringify(data, null, 2));
}

const printAsteroidCountToConsole = (asteroidCount) => {
    console.log(`From ${START_DATE} to ${END_DATE} were seen ${asteroidCount} asteroid(s).`);
}

const printResults = (data) => {
    const asteroids = JSON.parse(data);
    printJsonToConsole(asteroids);
    printAsteroidCountToConsole(asteroids.element_count);
}

getAllAsteroidsInPeriod();