const express = require('express');
const boolParser = require('express-query-boolean');
const config = require('./config/config');
const asteroidRouter = require('./routes/asteroidsRouter');
const photoRouter = require('./routes/roverPhotoRouter');
const {exceptionHandler, pageNotFoundHandler, errorLogger} = require('./middleware/errorHandler');
const validateQuery = require('./middleware/validator');
const schemas = require('./validators/schemas/schema');
const app = express();

app.use(express.json());
app.use(boolParser());
app.use('/meteors', validateQuery(schemas.asteroidsSchema, 'query'), asteroidRouter);
app.use('/photo', validateQuery(schemas.roverPhotoSchema, 'body'), photoRouter);
app.use(errorLogger);
app.use(exceptionHandler);
app.use('*', pageNotFoundHandler);

app.listen(config.port, (error) => {
    error ? console.error(error) : console.log(`Server is running on the port ${config.port}`);
});