import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const sheetUrl = process.env.VITE_SHEET_LINK || "https://script.google.com/macros/s/AKfycbwpZdhqMlXfrNRZJKuGYRFgAgBGaFKgxCTjx_jPaId9ElnwdcWaheRv7NTVqNRfE-OwzA/exec";

export default defineConfig({
  plugins: [react(),tailwindcss()],
  server: {
    proxy: {
      "/api/booking": {
        target: new URL(sheetUrl).origin,
        changeOrigin: true,
        rewrite: (path) =>
          path.replace(
            "/api/booking",
            new URL(sheetUrl).pathname
          ),
      },
    },
  },
});
