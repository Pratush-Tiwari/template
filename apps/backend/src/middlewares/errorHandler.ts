import type { Request, Response, NextFunction } from 'express';
import { logger } from '../utils/logger.js';

export function errorHandler(err: any, _req: Request, res: Response, _next: NextFunction) {
  const status = typeof err?.status === 'number' ? err.status : 500;
  const message = err?.message ?? 'Internal Server Error';
  logger.error(err);
  res.status(status).json({ error: { message } });
}
