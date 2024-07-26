import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

import pkg from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
  },
  build: {
    minify: 'esbuild',
    lib: {
      entry: './lib/index.ts',
      formats: ['cjs', 'es'],
      fileName: (filename) => `${pkg.name}-${filename}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(pkg.peerDependencies)],
      output: {
        sourcemap: true,
      },
    },
  },
});
