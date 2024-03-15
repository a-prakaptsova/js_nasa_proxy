const express = require('express');
const config = require('./config/config');
const logger = require('./utils/logger');
const asteroidRouter = require('./routes/asteroidsRouter');
const photoRouter = require('./routes/roverPhotoRouter');
const boolParser = require('express-query-boolean');
const app = express();

app.use(express.json());
app.use(boolParser());
app.use('/meteors', asteroidRouter);
app.use('/photo', photoRouter);
app.use((err, req, res, next) => {
    logger.error(err);
    next(err);
});
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message
    })
});
app.use('*', (req, res) =>
    res.status(404).json({ message: 'Page not found' }),
);

app.listen(config.port, (error) => {
    error ? console.error(error) : console.log(`Server is running on the port ${config.port}`);
});