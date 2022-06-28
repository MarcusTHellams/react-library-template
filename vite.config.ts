/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// @ts-ignore
import pkg from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    minify: true,
  },
  build: {
    lib: {
      entry: './lib/index.ts',
      formats: ['cjs', 'es'],
      fileName: (filename) => `${pkg.name}-${filename}.js`,
    },
    rollupOptions: {
      output: {
        sourcemap: true,
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/tests/setup.ts'],
  },
});
