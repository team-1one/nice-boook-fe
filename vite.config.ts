import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';
import { tanstackRouter } from '@tanstack/router-plugin/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
    }),
    react(),
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        // vite.config.ts
        manualChunks(id) {
          if (!id.includes('node_modules')) return;

          // 1. Isolate Devtools into their own chunk so they never touch production logic
          if (id.includes('devtools') || id.includes('solid-js')) {
            return 'devtools';
          }

          // 2. Group UI Framework together
          if (
            id.includes('radix-ui') ||
            id.includes('@radix-ui') ||
            id.includes('cmdk')
          ) {
            return 'ui';
          }

          // 3. Keep Tanstack (Query/Router) core separate from UI
          if (id.includes('@tanstack')) {
            return 'tanstack';
          }

          return 'vendor';
        },
      },
    },
  },
});
