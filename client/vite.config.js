import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 4040,
  },
  root: "./",
  base: "/",
  publicDir: "public",
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
  plugins: [],
});
