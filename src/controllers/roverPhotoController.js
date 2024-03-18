const Sentry = require("@sentry/node");
const getMostRecentRoverPhotoLink = require('../services/roverPhotoService')

const getMostRecentRoverPhoto = (req, res, next) => {
    Sentry.captureEvent({
        message: 'User requested a photo',
        user: { id: req.body.user_id },
        level: 'info',
    });
    getMostRecentRoverPhotoLink(req.body.api_key)
        .then(data => res.redirect(data))
        .catch(error => next(error));
}

module.exports = { getMostRecentRoverPhoto };