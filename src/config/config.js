require('dotenv').config();

const config = {
    nasaApi: {
        getAsteroidsUrl: process.env.NASA_BASE_URL + process.env.GET_ASTEROIDS_URL,
        getRoverPhotoUrl: process.env.NASA_BASE_URL + process.env.GET_ROVER_PHOTO_URL,
        getRoverManifestUrl: process.env.NASA_BASE_URL + process.env.GET_ROVER_MANIFEST_URL,
        apiKey: process.env.API_KEY
    },
    dateFormats: {
        defaultDateFormat: process.env.DATE_FORMAT,
        joiDateFormat: process.env.JOI_DATE_FORMAT
    },
    port: process.env.PORT || 8000,
    sentryDsn: process.env.SENTRY_DSN
}

module.exports = config;