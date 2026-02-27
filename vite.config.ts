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
        manualChunks(id) {
          if (!id.includes('node_modules')) return;

          // Group Core Framework & UI together to avoid cross-chunk circularity
          if (
            id.includes('radix-ui') ||
            id.includes('@radix-ui') ||
            id.includes('cmdk') ||
            id.includes('lucide-react')
          ) {
            return 'ui-framework';
          }

          // Keep data/logic separate
          if (id.includes('@tanstack')) return 'tanstack';
          if (id.includes('@supabase')) return 'supabase';

          // Everything else (zod, etc.) into vendor
          return 'vendor';
        },
      },
    },
  },
});
