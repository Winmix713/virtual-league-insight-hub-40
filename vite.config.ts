
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  root: "client",
  server: {
    host: "0.0.0.0",
    port: 5000,
    open: true,
    allowedHosts: [
      "e86dd3f0-39ef-4aac-8dbf-9b3fcdadb6c8-00-2yw436p8houb4.kirk.replit.dev",
      // Add other hosts as needed
    ],
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"),
      "@shared": path.resolve(__dirname, "shared"),
    },
  },
  build: {
    outDir: "../dist",
    sourcemap: mode === "development",
  },
}));
