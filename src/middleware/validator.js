const Joi = require('joi');

const validateQuery = (schema, property) => {
    return (req, res, next) => {
        const { error } = schema.validate(req[property]);
        error == null ? next() : res.status(422).json({ error: error.details[0].message })
    }
}

module.exports = validateQuery;