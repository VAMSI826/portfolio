// vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "dist", // The directory where build output will be placed
    rollupOptions: {
      input: {
        main: "index.html", // Path to your main HTML file
      },
    },
  },
});
