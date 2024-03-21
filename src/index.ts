import * as express from 'express';
import * as Sentry from '@sentry/node';
import { nodeProfilingIntegration } from '@sentry/profiling-node';
import * as nunjucks from 'nunjucks';
import * as path from 'path';
import { config } from './config/config';
import { router as asteroidRouter } from './routes/asteroidsRouter';
import { router as photoRouter } from './routes/roverPhotoRouter';
import { exceptionHandler, pageNotFoundHandler, errorLogger } from './middleware/errorHandler';
import { validateQuery } from './middleware/validator';
import { asteroidsSchema, roverPhotoSchema } from './validators/schemas/schema';

const app = express();

Sentry.init({
    dsn: config.sentryDsn,
    integrations: [
        new Sentry.Integrations.Http({ tracing: true }),
        new Sentry.Integrations.Express({ app }),
        nodeProfilingIntegration()
    ],
    tracesSampleRate: 1.0,
    profilesSampleRate: 1.0
});

nunjucks.configure(path.resolve(__dirname, '../views'), {
    autoescape: true,
    express: app,
    noCache: true
});

app.use(Sentry.Handlers.requestHandler());
app.use(Sentry.Handlers.tracingHandler());
app.use(express.json());
app.use('/meteors', validateQuery(asteroidsSchema, 'query'), asteroidRouter);
app.use('/photo', validateQuery(roverPhotoSchema, 'body'), photoRouter);
app.use(Sentry.Handlers.errorHandler());
app.use(errorLogger);
app.use(exceptionHandler);
app.use('*', pageNotFoundHandler);

const server = app.listen(config.port, () => {
    console.log(`Server is running on the port ${config.port}`);
});

process.on('SIGTERM', () => {
    server.close(() => {
        console.log('Server closed');
    });
});
