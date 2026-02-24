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

          if (id.includes('@tanstack')) return 'tanstack';
          if (id.includes('@supabase')) return 'supabase';
          if (id.includes('zod')) return 'zod';
          if (id.includes('radix-ui') || id.includes('@radix-ui'))
            return 'radix';
          if (id.includes('lucide-react')) return 'icons';

          return 'vendor';
        },
      },
    },
  },
});
