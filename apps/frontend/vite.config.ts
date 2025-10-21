import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import * as path from 'node:path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      '@template/ui': path.resolve(__dirname, '../../packages/ui/src'),
      '@template/shared-types': path.resolve(__dirname, '../../packages/shared-types/src'),
      '@': path.resolve(__dirname, '../../packages/ui/src'),
    },
  },
  optimizeDeps: {
    exclude: ['@template/ui'],
  },
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        changeOrigin: true,
      },
    },
  },
  preview: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        changeOrigin: true,
      },
    },
  },
});
