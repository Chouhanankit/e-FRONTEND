import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://e-backend-zjo7.onrender.com",
        changeOrigin: true,
        secure: true,
      },
    },
  },
});
