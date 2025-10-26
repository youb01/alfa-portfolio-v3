import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // IMPORTANT: Set base to your repository name
  base: "/alfa-portfolio-v3/",

  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false, // Set to true if you want source maps

    // Optimize build
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          motion: ["framer-motion"],
        },
      },
    },

    chunkSizeWarningLimit: 1000,
  },

  // Preview server config (for local testing)
  preview: {
    port: 4173,
    strictPort: true,
  },
});
