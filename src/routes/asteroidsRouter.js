const express = require('express');
const router = express.Router();
const asteroidController = require('../controllers/asteroidController');

router.get('/', asteroidController.getAsteroidsInPeriod);

module.exports = router;