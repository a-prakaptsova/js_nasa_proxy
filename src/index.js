require('dotenv').config();
const express = require('express');
const logger = require('./utils/logger');
const asteroidRouter = require('./routes/asteroidsRouter');
const app = express();

const PORT = process.env.PORT || 8000;

app.use((req, res, next) => {
    res.setHeader("Content-Type", "application/json");
    next();
});
app.use('/', asteroidRouter);
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

app.listen(PORT, (error) => {
    error ? console.error(error) : console.log(`Server is running on the port ${PORT}`);
});