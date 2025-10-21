import type { Request, Response } from 'express';
import { env } from '../config/env.js';
import { DatabaseService } from '../services/database.service.js';

export async function health(_req: Request, res: Response) {
  try {
    // Test database connection
    const dbStatus = await DatabaseService.getConnectionStatus();

    res.json({
      status: 'ok',
      nodeEnv: env.NODE_ENV,
      database: {
        connected: dbStatus.connected,
        ...(dbStatus.error && { error: dbStatus.error }),
      },
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      nodeEnv: env.NODE_ENV,
      database: {
        connected: false,
        error: error instanceof Error ? error.message : 'Unknown database error',
      },
    });
  }
}
