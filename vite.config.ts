import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: "es2022",
    cssCodeSplit: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        conserto: path.resolve(__dirname, "conserto-lava-e-seca.html"),
        instalacao: path.resolve(__dirname, "instalacao-lava-e-seca.html"),
        higienizacao: path.resolve(__dirname, "higienizacao-lava-e-seca.html"),
      },
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
          icons: ["lucide-react"],
        },
      },
    },
  },
}));
