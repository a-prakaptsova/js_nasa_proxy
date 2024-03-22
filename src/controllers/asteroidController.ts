import type { Request, Response, NextFunction } from 'express';
import { getAsteroidsInPeriod as getAsteroids } from '../services/asteroidService';
import type { AsteroidQueryParams } from '../utils/types/asteroid';

export const getAsteroidsInPeriod = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const asteroids = await getAsteroids(req.query as AsteroidQueryParams);
        res.render('asteroids.njk', { asteroidsData: asteroids });
    } catch (error) {
        next(error);
    }
};
