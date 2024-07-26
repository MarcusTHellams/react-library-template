import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';

import pkg from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
  },
  build: {
    sourcemap: true,
    minify: 'esbuild',
    lib: {
      entry: resolve(__dirname, './lib/index.ts'),
      formats: ['cjs', 'es'],
      fileName: (filename) => `${pkg.name}-${filename}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(pkg.peerDependencies)],
    },
  },
});
