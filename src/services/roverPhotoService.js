const axios = require('axios');
const Exception = require('../utils/exceptions/Exception');
const config = require('../config/config')

const getMostRecentRoverPhotoLink = (apiKey) => {
    return getMostRecentRoverPhotoDate(apiKey)
        .then((date) => {
            return axios.get(config.nasaApi.getRoverPhotoUrl, {
                params: {
                    earth_date: date,
                    api_key: apiKey
                }
            })
        })
        .then((resp) => resp.data.photos.pop().img_src)
        .catch((err) => handleException(err))
}

const getMostRecentRoverPhotoDate = (apiKey) => {
    return axios.get(config.nasaApi.getRoverManifestUrl, { params: { api_key: apiKey } })
        .then(resp => resp.data.photo_manifest.max_date)
        .catch((err) => handleException(err))
}

const handleException = (err) => { throw new Exception(err.code || 500, err.message) };

module.exports = getMostRecentRoverPhotoLink;