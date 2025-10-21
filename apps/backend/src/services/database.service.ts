import { prisma } from '@template/db';

export class DatabaseService {
  /**
   * Test database connection by performing a simple query
   * @returns Promise<boolean> - true if connection is successful
   */
  static async testConnection(): Promise<boolean> {
    try {
      // Perform a simple query to test the connection
      await prisma.$queryRaw`SELECT 1`;
      return true;
    } catch (error) {
      console.error('Database connection test failed:', error);
      return false;
    }
  }

  /**
   * Get detailed database connection status
   * @returns Promise<{connected: boolean, error?: string}>
   */
  static async getConnectionStatus(): Promise<{
    connected: boolean;
    error?: string;
  }> {
    try {
      await prisma.$queryRaw`SELECT 1`;
      return { connected: true };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      return {
        connected: false,
        error: errorMessage,
      };
    }
  }

  /**
   * Gracefully disconnect from the database
   */
  static async disconnect(): Promise<void> {
    await prisma.$disconnect();
  }
}
