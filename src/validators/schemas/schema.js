const Joi = require('joi').extend(require('@joi/date'));
const config = require('../../config/config');

const asteroidsSchema = Joi.object({
    start_date: Joi.date().format(config.dateFormats.joiDateFormat),
    end_date: Joi.date().format(config.dateFormats.joiDateFormat),
    count: Joi.boolean(),
    were_dangerous_asteroid: Joi.boolean()
});

const roverPhotoSchema = Joi.object({
    user_id: Joi.string(),
    user_name: Joi.string(),
    api_key: Joi.string().required()
});

module.exports = { asteroidsSchema, roverPhotoSchema };