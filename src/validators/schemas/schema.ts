import * as JoiBase from 'joi';
import JoiDate from '@joi/date';
import { config } from '../../config/config';
import { type AsteroidQueryParams } from '../../utils/types/asteroid';
import { type RoverRequestBody } from '../../utils/types/rover';

const Joi = JoiBase.extend(JoiDate);

export const asteroidsSchema = JoiBase.object<AsteroidQueryParams>({
    start_date: Joi.date().format(config.dateFormats.joiDateFormat),
    end_date: Joi.date().format(config.dateFormats.joiDateFormat),
    count: Joi.boolean(),
    were_dangerous_asteroids: Joi.boolean()
});

export const roverPhotoSchema = JoiBase.object<RoverRequestBody>({
    user_id: Joi.string(),
    user_name: Joi.string(),
    api_key: Joi.string().required()
});
