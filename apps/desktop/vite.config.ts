/**
 * Vite config для desktop.
 *
 * Важно:
 * - порт фиксируем, чтобы Tauri devUrl всегда был стабильным
 * - strictPort=true, чтобы Vite не перескочил на другой порт молча
 */

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174,
    strictPort: true,
  },
});
