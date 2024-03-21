import * as Sentry from '@sentry/node';
import type { Request, Response, NextFunction } from 'express';
import { getMostRecentRoverPhotoLink } from '../services/roverPhotoService';
import { type RoverRequestBody } from '../utils/types/rover';

export const getMostRecentRoverPhoto = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const roverBody: RoverRequestBody = req.body;
    try {
        Sentry.captureEvent({
            message: 'User requested a photo',
            user: { id: roverBody.user_id },
            level: 'info'
        });
        const link = await getMostRecentRoverPhotoLink(roverBody.api_key);
        res.redirect(link);
    } catch (error) {
        next(error);
    }
};
