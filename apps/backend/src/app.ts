import express from 'express';
import routes from './routes/index.js';
import { requestLogger } from './middlewares/requestLogger.js';
import { notFoundHandler } from './middlewares/notFound.js';
import { errorHandler } from './middlewares/errorHandler.js';

export function createApp() {
  const app = express();

  // Core middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(requestLogger);

  // Routes
  app.use('/api', routes);

  // 404 and error handlers
  app.use(notFoundHandler);
  app.use(errorHandler);

  return app;
}

export const app = createApp();
