import type { Request, Response, NextFunction } from 'express';
import { type Schema } from 'joi';

export const validateQuery = (schema: Schema, property: string) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = schema.validate(req[property]);
        error == null ? next() : res.status(422).json({ error: error.details[0].message });
    };
};