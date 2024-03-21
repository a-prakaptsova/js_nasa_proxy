import * as express from 'express';
import * as roverPhotoController from '../controllers/roverPhotoController';

export const router = express.Router();

router.post('/', roverPhotoController.getMostRecentRoverPhoto);
