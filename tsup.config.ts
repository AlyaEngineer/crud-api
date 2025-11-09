import { defineConfig } from 'tsup';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  entry: ['src/index.ts'],
  outDir: 'dist',
  target: 'node20',
  format: ['cjs'],
  clean: true,
  sourcemap: true,
  minify: false,
  splitting: false,
  dts: false,
  env: {
    NODE_ENV: process.env.NODE_ENV ?? 'production',
    PORT: process.env.PORT ?? '4000',
  },
  banner: {
    js: `/**
 * Build generated at: ${new Date().toISOString()}
 * Environment: ${process.env.NODE_ENV}
 */`,
  },
});
