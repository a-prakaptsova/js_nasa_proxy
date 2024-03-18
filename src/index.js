const express = require('express');
const boolParser = require('express-query-boolean');
const Sentry = require("@sentry/node");
const { nodeProfilingIntegration } = require("@sentry/profiling-node");
const nunjucks = require('nunjucks');
const config = require('./config/config');
const asteroidRouter = require('./routes/asteroidsRouter');
const photoRouter = require('./routes/roverPhotoRouter');
const {exceptionHandler, pageNotFoundHandler, errorLogger} = require('./middleware/errorHandler');
const validateQuery = require('./middleware/validator');
const schemas = require('./validators/schemas/schema');
const app = express();

Sentry.init({
    dsn: config.sentryDsn,
    integrations: [
      new Sentry.Integrations.Http({ tracing: true }),
      new Sentry.Integrations.Express({ app }),
      nodeProfilingIntegration(),
    ],
    tracesSampleRate: 1.0,
    profilesSampleRate: 1.0,
  });

nunjucks.configure(__dirname + '/views', {
    autoescape: true,
    express: app,
    noCache: true
});

app.use(Sentry.Handlers.requestHandler());
app.use(Sentry.Handlers.tracingHandler());
app.use(express.json());
app.use(boolParser());
app.use('/meteors', validateQuery(schemas.asteroidsSchema, 'query'), asteroidRouter);
app.use('/photo', validateQuery(schemas.roverPhotoSchema, 'body'), photoRouter);
app.use(Sentry.Handlers.errorHandler());
app.use(errorLogger);
app.use(exceptionHandler);
app.use('*', pageNotFoundHandler);

app.listen(config.port, (error) => {
    error ? console.error(error) : console.log(`Server is running on the port ${config.port}`);
});