import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': resolve(__dirname, './src/'),
      },
    },
    build: {
      assetsDir: '_',
      rollupOptions: {
        output: {
          manualChunks: {
            firebase: ['firebase/analytics', 'firebase/app', 'firebase/auth'],
            react: ['react', 'react-dom', 'react-router-dom'],
          },
        },
      },
    },
  };
});
