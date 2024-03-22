import * as express from 'express';
import * as asteroidController from '../controllers/asteroidController';

export const router = express.Router();

router.get('/', asteroidController.getAsteroidsInPeriod);
