const express = require('express');
const router = express.Router();
const roverPhotoController = require('../controllers/roverPhotoController.js');

router.post('/', roverPhotoController.getMostRecentRoverPhoto);

module.exports = router;