import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tagger from "@dhiwise/component-tagger";

/**
 * Vite config tuned for Vercel + better code-splitting for large vendor libs.
 * - outDir: "build" (matches your current setup)
 * - manualChunks: split big node_modules into separate files (react, charts, motion, d3, etc.)
 * - chunkSizeWarningLimit: increased but manualChunks is the real fix
 * - sourcemap: driven by env var SOURCE_MAP (set SOURCE_MAP=true to produce maps)
 *
 * Notes:
 * 1) Remove `--sourcemap` from your package.json build script (or leave it but it will be overridden
 *    by the env-driven sourcemap below if you set SOURCE_MAP=false).
 * 2) Ensure Vercel's Output Directory in Project Settings is set to `build` or add vercel.json:
 *    { "version": 2, "outputDirectory": "build" }
 */

export default defineConfig({
  plugins: [tsconfigPaths(), react(), tagger()],
  build: {
    outDir: "build",
    // only produce sourcemaps when explicitly requested: `SOURCE_MAP=true npm run build`
    sourcemap: process.env.SOURCE_MAP === "true",
    // raised but manualChunks should prevent huge single file
    chunkSizeWarningLimit: 3000, // KB

    rollupOptions: {
      output: {
        // manualChunks splits large node_modules packages into separate bundles
        manualChunks(id) {
          if (!id) return;
          if (id.includes("node_modules")) {
            // React and react-dom together
            if (id.includes("react") || id.includes("react-dom")) return "vendor.react";
            // Charting libraries
            if (id.includes("recharts") || id.includes("d3")) return "vendor.charts";
            // Framer / motion
            if (id.includes("framer-motion")) return "vendor.motion";
            // Redux toolkit, redux
            if (id.includes("@reduxjs") || id.includes("redux")) return "vendor.redux";
            // large UI-ish libs or other vendor libs
            if (id.includes("lucide-react") || id.includes("axios") || id.includes("date-fns")) return "vendor.misc";
            // fallback for everything else in node_modules
            return "vendor";
          }
        },
        // keep human-friendly filenames (optional)
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash].[ext]"
      }
    }
  },
  server: {
    port: 4028,
    host: "0.0.0.0",
    strictPort: true,
    allowedHosts: [".amazonaws.com", ".builtwithrocket.new"]
  }
});
