import { defineConfig } from 'vitest/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/todo-app/',
  plugins: [
    react(),
    tailwindcss(),
  ],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/tests.ts',
  },
});
