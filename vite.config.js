import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(),tailwindcss()],
  server: {
    proxy: {
      "/api/booking": {
        target: "https://script.google.com",
        changeOrigin: true,
        rewrite: (path) =>
          path.replace(
            "/api/booking",
            "/macros/s/AKfycbwpZdhqMlXfrNRZJKuGYRFgAgBGaFKgxCTjx_jPaId9ElnwdcWaheRv7NTVqNRfE-OwzA/exec"
          ),
      },
    },
  },
});
