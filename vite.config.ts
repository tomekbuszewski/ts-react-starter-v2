/// <reference types="vitest" />
import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { configDefaults } from "vitest/config";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  const port = env.VITE_PREVIEW_PORT;

  if (typeof port !== "string") {
    throw new Error("VITE_PREVIEW_PORT is required");
  }

  return {
    plugins: [tsconfigPaths(), react()],
    preview: {
      port: Number(port),
      strictPort: true,
    },
    test: {
      globals: true,
      environment: "happy-dom",
      setupFiles: ["./config/test.setup.ts"],
      exclude: [...configDefaults.exclude, "./e2e/**/*"],
    },
  };
});
