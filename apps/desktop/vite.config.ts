/**
 * Vite config для desktop.
 *
 * Важно:
 * - порт фиксируем, чтобы Tauri devUrl всегда был стабильным
 * - strictPort=true, чтобы Vite не перескочил на другой порт молча
 */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174,
    strictPort: true,
  },
});
