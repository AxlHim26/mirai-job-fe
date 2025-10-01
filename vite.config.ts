import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";

export default defineConfig({
  base: "./",
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/testing/setup-tests.ts",
    exclude: ["**/node_modules/**"],
    coverage: {
      include: ["src/**"],
    },
    css: true,
  },
  optimizeDeps: {
    exclude: ["fsevents"],
  },
  build: {
    rollupOptions: {
      external: ["fs/promises"],
      output: {
        experimentalMinChunkSize: 3500,
      },
    },
  },
  define: {
    global: "globalThis",
  },
});