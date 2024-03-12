const express = require('express');
const router = express.Router();
const asteroidController = require('../controllers/asteroidController');

router.get('/meteors', asteroidController.getAsteroidsInPeriod);

module.exports = router;