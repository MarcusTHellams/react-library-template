import { defineConfig, mergeConfig } from 'vitest/config';

import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      passWithNoTests: true,
      environment: 'jsdom',
      globals: true,
      setupFiles: ['src/tests/setup.ts'],
    },
  }),
);
