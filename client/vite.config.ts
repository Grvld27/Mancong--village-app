import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  root: resolve(__dirname, 'client'), // ✅ Arahkan ke folder client

  plugins: [react()],
  base: './', // ✅ Bisa juga '/' jika routing 404 di Vercel

  resolve: {
    alias: {
      '@': resolve(__dirname, 'client/src'),
    },
  },
  server: {
    proxy: {
      '/api': 'http://localhost:5000',
    },
  },
  build: {
    outDir: 'dist', // dist di dalam client/
    minify: true,
    rollupOptions: {
      treeshake: false,
    },
  }
});
