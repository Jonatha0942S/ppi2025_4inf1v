import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/supabase': {
        target: 'https://pkhoeevqowvttnwhjbke.supabase.co',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/supabase/, ''), 
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
});
