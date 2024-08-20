/// <reference types="vitest" />
import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import { cdn } from "vite-plugin-cdn2";
import checker from "vite-plugin-checker";
import tsconfigPaths from "vite-tsconfig-paths";
import { configDefaults } from "vitest/config";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  const port = env.VITE_PREVIEW_PORT;

  if (typeof port !== "string") {
    throw new Error("VITE_PREVIEW_PORT is required");
  }

  return {
    plugins: [
      tsconfigPaths(),
      react(),
      checker({ typescript: true }),
      cdn({
        modules: [
          {
            name: "react",
            relativeModule: "./umd/react.production.min.js",
          },
          {
            name: "react-dom",
            relativeModule: "./umd/react-dom.production.min.js",
            aliases: ["client"],
          },
        ],
      }),
    ],
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
