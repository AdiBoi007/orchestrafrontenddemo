import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "./",
  plugins: [react()],
  server: {
    proxy: {
      "/api/waitlist": {
        target: "https://orchestraos-mu.vercel.app",
        changeOrigin: true,
      },
    },
  },
});
