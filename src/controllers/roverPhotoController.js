const getMostRecentRoverPhotoLink = require('../services/roverPhotoService')

const getMostRecentRoverPhoto = (req, res, next) => {
    getMostRecentRoverPhotoLink(req.body.api_key)
        .then(data => res.redirect(data))
        .catch(error => next(error));
}

module.exports = { getMostRecentRoverPhoto };